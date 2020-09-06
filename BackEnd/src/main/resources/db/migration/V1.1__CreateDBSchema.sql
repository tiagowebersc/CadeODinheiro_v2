-- -----------------------------------------------------
-- Table `COD2`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`user` (
                                             `id_user` INT NOT NULL AUTO_INCREMENT,
                                             `creation_date` DATE NOT NULL,
                                             `username` VARCHAR(150) NOT NULL,
                                             `hash_password` VARCHAR(60) NOT NULL,
                                             `name` VARCHAR(60) NOT NULL,
                                             PRIMARY KEY (`id_user`),
                                             UNIQUE INDEX `username_UNIQUE` (`username` ASC))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`currency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`currency` (
                                                 `acronym` VARCHAR(6) NOT NULL,
                                                 `name` VARCHAR(60) NOT NULL,
                                                 `prefix` VARCHAR(5) NULL,
                                                 `suffix` VARCHAR(5) NULL,
                                                 PRIMARY KEY (`acronym`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`account` (
                                                `id_account` INT NOT NULL AUTO_INCREMENT,
                                                `user_id` INT NOT NULL,
                                                `creation_date` DATE NOT NULL,
                                                `currency_acronym` VARCHAR(6) NOT NULL,
                                                `account_type` VARCHAR(2) NOT NULL,
                                                `name` VARCHAR(60) NOT NULL,
                                                `description` VARCHAR(200) NOT NULL,
                                                `balance` DECIMAL(16,2) NOT NULL,
                                                `display_on_dashboard` TINYINT(1) NOT NULL,
                                                `is_active` TINYINT(1) NOT NULL,
                                                PRIMARY KEY (`id_account`),
                                                INDEX `fk_account_user_idx` (`user_id` ASC),
                                                INDEX `fk_account_currency_idx` (`currency_acronym` ASC),
                                                CONSTRAINT `fk_account_user`
                                                    FOREIGN KEY (`user_id`)
                                                        REFERENCES `COD2`.`user` (`id_user`)
                                                        ON DELETE NO ACTION
                                                        ON UPDATE NO ACTION,
                                                CONSTRAINT `fk_account_currency`
                                                    FOREIGN KEY (`currency_acronym`)
                                                        REFERENCES `COD2`.`currency` (`acronym`)
                                                        ON DELETE NO ACTION
                                                        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`category` (
                                                 `id_category` INT NOT NULL AUTO_INCREMENT,
                                                 `user_id` INT NOT NULL,
                                                 `creation_date` DATE NOT NULL,
                                                 `category_type` VARCHAR(2) NOT NULL,
                                                 `description` VARCHAR(60) NOT NULL,
                                                 `is_active` TINYINT(1) NOT NULL,
                                                 `upper_category_id` INT NULL,
                                                 PRIMARY KEY (`id_category`),
                                                 INDEX `fk_category_user_idx` (`user_id` ASC),
                                                 INDEX `fk_category_category_idx` (`upper_category_id` ASC),
                                                 CONSTRAINT `fk_category_user`
                                                     FOREIGN KEY (`user_id`)
                                                         REFERENCES `COD2`.`user` (`id_user`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION,
                                                 CONSTRAINT `fk_category_category`
                                                     FOREIGN KEY (`upper_category_id`)
                                                         REFERENCES `COD2`.`category` (`id_category`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`creditCardSetting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`creditCardSetting` (
                                                          `id_credit_card_setting` INT NOT NULL AUTO_INCREMENT,
                                                          `account_id` INT NOT NULL,
                                                          `bill_closing_day` INT NOT NULL,
                                                          INDEX `fk_CreditCardSetting_account_idx` (`account_id` ASC),
                                                          PRIMARY KEY (`id_credit_card_setting`),
                                                          UNIQUE INDEX `account_id_UNIQUE` (`account_id` ASC),
                                                          CONSTRAINT `fk_CreditCardSetting_account`
                                                              FOREIGN KEY (`account_id`)
                                                                  REFERENCES `COD2`.`account` (`id_account`)
                                                                  ON DELETE NO ACTION
                                                                  ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`reminder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`reminder` (
                                                 `id_reminder` INT NOT NULL AUTO_INCREMENT,
                                                 `user_id` INT NOT NULL,
                                                 `creation_date` DATE NOT NULL,
                                                 `category_id` INT NOT NULL,
                                                 `description` VARCHAR(100) NOT NULL,
                                                 `amount` DECIMAL(16,2) NOT NULL,
                                                 `start_date` DATE NOT NULL,
                                                 `end_date` DATE,
                                                 `reminder_type` VARCHAR(2) NOT NULL,
                                                 `is_active` TINYINT(1) NOT NULL,
                                                 PRIMARY KEY (`id_reminder`),
                                                 INDEX `fk_reminder_user_idx` (`user_id` ASC),
                                                 INDEX `fk_reminder_category_idx` (`category_id` ASC),
                                                 CONSTRAINT `fk_reminder_user`
                                                     FOREIGN KEY (`user_id`)
                                                         REFERENCES `COD2`.`user` (`id_user`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION,
                                                 CONSTRAINT `fk_reminder_category`
                                                     FOREIGN KEY (`category_id`)
                                                         REFERENCES `COD2`.`category` (`id_category`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transaction` (
                                                    `id_transaction` INT NOT NULL AUTO_INCREMENT,
                                                    `user_id` INT NOT NULL,
                                                    `creation_date` DATE NOT NULL,
                                                    `date` DATE NOT NULL,
                                                    `description` VARCHAR(100) NOT NULL,
                                                    `amount` DECIMAL(16,2) NOT NULL,
                                                    `reminder_id` INT NOT NULL,
                                                    PRIMARY KEY (`id_transaction`),
                                                    INDEX `fk_transaction_user_idx` (`user_id` ASC),
                                                    INDEX `fk_transaction_reminder_idx` (`reminder_id` ASC),
                                                    CONSTRAINT `fk_transaction_user`
                                                        FOREIGN KEY (`user_id`)
                                                            REFERENCES `COD2`.`user` (`id_user`)
                                                            ON DELETE NO ACTION
                                                            ON UPDATE NO ACTION,
                                                    CONSTRAINT `fk_transaction_reminder`
                                                        FOREIGN KEY (`reminder_id`)
                                                            REFERENCES `COD2`.`reminder` (`id_reminder`)
                                                            ON DELETE NO ACTION
                                                            ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transactionAccount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transactionAccount` (
                                                           `id_transaction_account` INT NOT NULL AUTO_INCREMENT,
                                                           `account_id` INT NOT NULL,
                                                           `transaction_id` INT NOT NULL,
                                                           `amount` DECIMAL(16,2) NOT NULL,
                                                           PRIMARY KEY (`id_transaction_account`),
                                                           INDEX `fk_transactionAccount_account_idx` (`account_id` ASC),
                                                           INDEX `fk_transactionAccount_transaction_idx` (`transaction_id` ASC),
                                                           CONSTRAINT `fk_transactionAccount_account`
                                                               FOREIGN KEY (`account_id`)
                                                                   REFERENCES `COD2`.`account` (`id_account`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION,
                                                           CONSTRAINT `fk_transactionAccount_transaction`
                                                               FOREIGN KEY (`transaction_id`)
                                                                   REFERENCES `COD2`.`transaction` (`id_transaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transactionCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transactionCategory` (
                                                            `id_transaction_category` INT NOT NULL AUTO_INCREMENT,
                                                            `transaction_id` INT NOT NULL,
                                                            `category_id` INT NOT NULL,
                                                            `category_type` VARCHAR(2) NOT NULL,
                                                            `amount` DECIMAL(16,2) NOT NULL,
                                                            PRIMARY KEY (`id_transaction_category`),
                                                            INDEX `fk_transactionCategory_category_idx` (`category_id` ASC),
                                                            INDEX `fk_transactionCategory_transaction_idx` (`transaction_id` ASC),
                                                            CONSTRAINT `fk_transactionCategory_category`
                                                                FOREIGN KEY (`category_id`)
                                                                    REFERENCES `COD2`.`category` (`id_category`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION,
                                                            CONSTRAINT `fk_transactionCategory_transaction`
                                                                FOREIGN KEY (`transaction_id`)
                                                                    REFERENCES `COD2`.`transaction` (`id_transaction`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`linkedTransactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`linkedTransactions` (
                                                           `id_linked_transactions` INT NOT NULL AUTO_INCREMENT,
                                                           `transaction_id_origin` INT NOT NULL,
                                                           `transaction_id_destiny` INT NOT NULL,
                                                           INDEX `fk_linkedTransactions_transaction1_idx` (`transaction_id_origin` ASC),
                                                           INDEX `fk_linkedTransactions_transaction2_idx` (`transaction_id_destiny` ASC),
                                                           PRIMARY KEY (`id_linked_transactions`),
                                                           UNIQUE INDEX `uk_linkedTransactions` (`transaction_id_origin` ASC, `transaction_id_destiny` ASC),
                                                           CONSTRAINT `fk_linkedTransactions_transaction1`
                                                               FOREIGN KEY (`transaction_id_origin`)
                                                                   REFERENCES `COD2`.`transaction` (`id_transaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION,
                                                           CONSTRAINT `fk_linkedTransactions_transaction2`
                                                               FOREIGN KEY (`transaction_id_destiny`)
                                                                   REFERENCES `COD2`.`transaction` (`id_transaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION)
    ENGINE = InnoDB;