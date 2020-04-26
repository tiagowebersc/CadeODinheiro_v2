package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity(name = "transactionCategory")
public class TransactionCategory {
    @Id
    @GeneratedValue
    private Long idTransactionCategory;

    //enum
    @Column
    private String categoryType;

    @Column
    private BigDecimal amount;

}
