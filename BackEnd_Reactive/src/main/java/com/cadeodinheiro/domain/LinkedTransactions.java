package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("linkedTransactions")
public class LinkedTransactions {
    @Id
    //@ManyToOne
    //@Column(name = "transaction_idTransactionOrigin")
    private Transaction transactionOrigin;

    @Id
    //@ManyToOne
    //@Column(name = "transaction_idTransactionDestiny")
    private Transaction transactionDestiny;
}
