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
                                                `id_account` INT NOT NULL,
                                                `id_user` INT NOT NULL,
                                                `creation_date` DATE NOT NULL,
                                                `currency_acronym` VARCHAR(6) NOT NULL,
                                                `account_type` VARCHAR(2) NOT NULL,
                                                `name` VARCHAR(60) NOT NULL,
                                                `description` VARCHAR(200) NOT NULL,
                                                `balance` DECIMAL(16,2) NOT NULL,
                                                `display_on_dashboard` TINYINT(1) NOT NULL,
                                                `is_active` TINYINT(1) NOT NULL,
                                                PRIMARY KEY (`id_account`),
                                                INDEX `fk_account_user_idx` (`id_user` ASC),
                                                INDEX `fk_account_currency_idx` (`currency_acronym` ASC),
                                                CONSTRAINT `fk_account_user`
                                                    FOREIGN KEY (`id_user`)
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
                                                 `idCategory` INT NOT NULL,
                                                 `user_idUser` INT NOT NULL,
                                                 `creationDate` DATE NOT NULL,
                                                 `categoryType` VARCHAR(1) NOT NULL,
                                                 `description` VARCHAR(60) NOT NULL,
                                                 `isActive` TINYINT(1) NOT NULL,
                                                 `upperCategory_idCategory` INT NULL,
                                                 PRIMARY KEY (`idCategory`),
                                                 INDEX `fk_category_user_idx` (`user_idUser` ASC),
                                                 INDEX `fk_category_category_idx` (`upperCategory_idCategory` ASC),
                                                 CONSTRAINT `fk_category_user`
                                                     FOREIGN KEY (`user_idUser`)
                                                         REFERENCES `COD2`.`user` (`id_user`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION,
                                                 CONSTRAINT `fk_category_category`
                                                     FOREIGN KEY (`upperCategory_idCategory`)
                                                         REFERENCES `COD2`.`category` (`idCategory`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`creditCardSettings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`creditCardSettings` (
                                                           `account_idAccount` INT NOT NULL,
                                                           `billClosingDay` INT NOT NULL,
                                                           PRIMARY KEY (`account_idAccount`),
                                                           INDEX `fk_CreditCardSettings_account_idx` (`account_idAccount` ASC),
                                                           CONSTRAINT `fk_CreditCardSettings_account`
                                                               FOREIGN KEY (`account_idAccount`)
                                                                   REFERENCES `COD2`.`account` (`id_account`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`reminder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`reminder` (
                                                 `idReminder` INT NOT NULL,
                                                 `user_idUser` INT NOT NULL,
                                                 `creationDate` DATE NOT NULL,
                                                 `category_idCategory` INT NOT NULL,
                                                 `description` VARCHAR(100) NOT NULL,
                                                 `amount` DECIMAL(9,2) NOT NULL,
                                                 `startDate` DATE NOT NULL,
                                                 `endDate` DATE NOT NULL,
                                                 `reminderType` VARCHAR(1) NOT NULL,
                                                 `isActive` TINYINT(1) NOT NULL,
                                                 PRIMARY KEY (`idReminder`),
                                                 INDEX `fk_reminder_user_idx` (`user_idUser` ASC),
                                                 INDEX `fk_reminder_category_idx` (`category_idCategory` ASC),
                                                 CONSTRAINT `fk_remider_user`
                                                     FOREIGN KEY (`user_idUser`)
                                                         REFERENCES `COD2`.`user` (`id_user`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION,
                                                 CONSTRAINT `fk_remider_category`
                                                     FOREIGN KEY (`category_idCategory`)
                                                         REFERENCES `COD2`.`category` (`idCategory`)
                                                         ON DELETE NO ACTION
                                                         ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transaction` (
                                                    `idTransaction` INT NOT NULL,
                                                    `user_idUser` INT NOT NULL,
                                                    `creationDate` DATE NOT NULL,
                                                    `date` DATE NOT NULL,
                                                    `description` VARCHAR(100) NOT NULL,
                                                    `amount` DECIMAL(9,2) NOT NULL,
                                                    `reminder_idReminder` INT NOT NULL,
                                                    PRIMARY KEY (`idTransaction`),
                                                    INDEX `fk_transaction_user_idx` (`user_idUser` ASC),
                                                    INDEX `fk_transaction_reminder_idx` (`reminder_idReminder` ASC),
                                                    CONSTRAINT `fk_transaction_user`
                                                        FOREIGN KEY (`user_idUser`)
                                                            REFERENCES `COD2`.`user` (`id_user`)
                                                            ON DELETE NO ACTION
                                                            ON UPDATE NO ACTION,
                                                    CONSTRAINT `fk_transaction_reminder`
                                                        FOREIGN KEY (`reminder_idReminder`)
                                                            REFERENCES `COD2`.`reminder` (`idReminder`)
                                                            ON DELETE NO ACTION
                                                            ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transactionAccount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transactionAccount` (
                                                           `idTransactionAccount` INT NOT NULL,
                                                           `account_idAccount` INT NOT NULL,
                                                           `transaction_idTransaction` INT NOT NULL,
                                                           `amount` DECIMAL(9,2) NOT NULL,
                                                           PRIMARY KEY (`idTransactionAccount`),
                                                           INDEX `fk_transactionAccount_account_idx` (`account_idAccount` ASC),
                                                           INDEX `fk_transactionAccount_transaction_idx` (`transaction_idTransaction` ASC),
                                                           CONSTRAINT `fk_transactionAccount_account`
                                                               FOREIGN KEY (`account_idAccount`)
                                                                   REFERENCES `COD2`.`account` (`id_account`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION,
                                                           CONSTRAINT `fk_transactionAccount_transaction`
                                                               FOREIGN KEY (`transaction_idTransaction`)
                                                                   REFERENCES `COD2`.`transaction` (`idTransaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`transactionCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`transactionCategory` (
                                                            `idTransactionCategory` INT NOT NULL,
                                                            `transaction_idTransaction` INT NOT NULL,
                                                            `category_idCategory` INT NOT NULL,
                                                            `categoryType` VARCHAR(1) NOT NULL,
                                                            `amount` DECIMAL(9,2) NOT NULL,
                                                            PRIMARY KEY (`idTransactionCategory`),
                                                            INDEX `fk_transactionCategory_category_idx` (`category_idCategory` ASC),
                                                            INDEX `fk_transactionCategory_transaction_idx` (`transaction_idTransaction` ASC),
                                                            CONSTRAINT `fk_transactionCategory_category`
                                                                FOREIGN KEY (`category_idCategory`)
                                                                    REFERENCES `COD2`.`category` (`idCategory`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION,
                                                            CONSTRAINT `fk_transactionCategory_transaction`
                                                                FOREIGN KEY (`transaction_idTransaction`)
                                                                    REFERENCES `COD2`.`transaction` (`idTransaction`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COD2`.`linkedTransactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COD2`.`linkedTransactions` (
                                                           `idLinkedTransactions` INT NOT NULL,
                                                           `transaction_idTransactionOrigin` INT NOT NULL,
                                                           `transaction_idTransactionDestiny` INT NOT NULL,
                                                           INDEX `fk_linkedTransactions_transaction1_idx` (`transaction_idTransactionOrigin` ASC),
                                                           INDEX `fk_linkedTransactions_transaction2_idx` (`transaction_idTransactionDestiny` ASC),
                                                           PRIMARY KEY (`idLinkedTransactions`),
                                                           UNIQUE INDEX `uk_linkedTransactions` (`transaction_idTransactionOrigin` ASC, `transaction_idTransactionDestiny` ASC),
                                                           CONSTRAINT `fk_linkedTransactions_transaction1`
                                                               FOREIGN KEY (`transaction_idTransactionOrigin`)
                                                                   REFERENCES `COD2`.`transaction` (`idTransaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION,
                                                           CONSTRAINT `fk_linkedTransactions_transaction2`
                                                               FOREIGN KEY (`transaction_idTransactionDestiny`)
                                                                   REFERENCES `COD2`.`transaction` (`idTransaction`)
                                                                   ON DELETE NO ACTION
                                                                   ON UPDATE NO ACTION)
    ENGINE = InnoDB;