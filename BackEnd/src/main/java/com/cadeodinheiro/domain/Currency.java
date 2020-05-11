package com.cadeodinheiro.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "currency")
public class Currency {
    @Id
    private String acronym;

    @Column(length = 60)
    private String name;

    @Column(length = 5)
    private String currencyPrefix;

    @Column(length = 5)
    private String currencySufix;
}
