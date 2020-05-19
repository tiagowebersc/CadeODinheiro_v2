package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import java.math.BigDecimal;

@Data
@Table("transactionCategory")
public class TransactionCategory {
    @Id
    //@GeneratedValue
    private Long idTransactionCategory;

    //@ManyToOne
    private Transaction transaction;

    //@ManyToOne
    private Category category;

    @Column
    private CategoryType categoryType;

    @Column
    private BigDecimal amount;

}
