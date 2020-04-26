package com.cadeodinheiro.domain;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "transactionCategory")
public class TransactionCategory {
    @Id
    @GeneratedValue
    private Long idTransactionCategory;

    @ManyToOne
    private Transaction transaction;

    @ManyToOne
    private Category category;

    @Column
    private CategoryType categoryType;

    @Column
    private BigDecimal amount;

}
