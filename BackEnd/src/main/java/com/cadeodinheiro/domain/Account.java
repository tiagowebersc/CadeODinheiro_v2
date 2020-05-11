package com.cadeodinheiro.domain;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "account")
public class Account {
    @Id
    @GeneratedValue
    private Long idAccount;

    @ManyToOne
    private User user;

    @ManyToOne
    private Currency currency;

    @Column
    private AccountType accountType;

    @Column(length = 60)
    private String name;

    @Column(length = 200)
    private String description;

    @Column
    private BigDecimal balance;

    @Column
    private Boolean displayOnResumeScreen;

    @Column
    private Boolean isActive;

}
