package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity(name = "linkedTransactions")
public class LinkedTransactions {
    @Id
    @ManyToOne
    @Column(name = "transaction_idTransactionOrigin")
    private Transaction transactionOrigin;

    @Id
    @ManyToOne
    @Column(name = "transaction_idTransactionDestiny")
    private Transaction transactionDestiny;
}
