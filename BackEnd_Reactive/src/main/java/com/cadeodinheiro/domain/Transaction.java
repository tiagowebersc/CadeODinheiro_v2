package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Table("transaction")
public class Transaction extends UserDate {
    @Id
    //@GeneratedValue
    private Long idTransaction;

    @Column
    private Date date;

    //@Column(length = 100)
    private String description;

    @Column
    private BigDecimal amount;

    //@ManyToOne
    private Reminder reminder;
}
