package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue
    private Long idTransaction;

    @Column
    private Date date;

    @Column
    private String description;

    @Column
    private BigDecimal amount;
}
