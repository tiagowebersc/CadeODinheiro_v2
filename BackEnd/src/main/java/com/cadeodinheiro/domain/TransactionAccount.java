package com.cadeodinheiro.domain;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "transactionAccount")
public class TransactionAccount {
    @Id
    @GeneratedValue
    private Long idTransactionAccount;

    @ManyToOne
    private Account account;

    @ManyToOne
    private Transaction transaction;

    @Column
    private BigDecimal amount;
}
