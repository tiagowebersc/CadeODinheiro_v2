package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity(name = "account")
public class Account {
    @Id
    @GeneratedValue
    private Long idAccount;

    // enum ??
    @Column(length = 1)
    private String accountType;

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
