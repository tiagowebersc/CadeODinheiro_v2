package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("creditCardSettings")
public class CreditCardSettings {
    @Id
    //@ManyToOne
    private Account account;

    @Column
    private int billClosingDay;
}
