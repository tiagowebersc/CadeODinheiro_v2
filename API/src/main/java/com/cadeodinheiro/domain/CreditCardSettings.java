package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity(name = "creditCardSettings")
public class CreditCardSettings {
    @Id
    @ManyToOne
    private Account account;

    @Column
    private int billClosingDay;
}
