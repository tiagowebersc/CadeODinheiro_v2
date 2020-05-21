package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import java.math.BigDecimal;

@Data
@Table("transactionAccount")
public class TransactionAccount {
    @Id
    //@GeneratedValue
    private Long idTransactionAccount;

    //@ManyToOne
    private Account account;

    //@ManyToOne
    private Transaction transaction;

    @Column
    private BigDecimal amount;
}
