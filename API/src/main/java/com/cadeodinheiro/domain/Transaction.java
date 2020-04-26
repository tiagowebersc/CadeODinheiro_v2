package com.cadeodinheiro.domain;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue
    private Long idTransaction;

    @ManyToOne
    private User user;

    @Column
    private Date date;

    @Column(length = 100)
    private String description;

    @Column
    private BigDecimal amount;

    @ManyToOne
    private Reminder reminder;
}
