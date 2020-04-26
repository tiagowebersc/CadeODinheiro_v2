package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity(name = "transactionAccount")
public class TransactionAccount {
    @Id
    @GeneratedValue
    private Long idTransactionAccount;

    @Column
    private BigDecimal amount;
}
