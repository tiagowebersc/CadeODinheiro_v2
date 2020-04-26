package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.Date;

@Entity(name = "creditCardSettings")
public class CreditCardSettings {
    @Column
    private int billClosingDay;
}
