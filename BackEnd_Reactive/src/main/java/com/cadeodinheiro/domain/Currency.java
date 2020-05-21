package com.cadeodinheiro.domain;


import lombok.AllArgsConstructor;
import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@AllArgsConstructor
@Table("currency")
public class Currency {
    @Id
    @Column("acronym")
    private String acronym;

    @Column("name")
    private String name;

    @Column("currencyPrefix")
    private String currencyPrefix;

    @Column("currencySuffix")
    private String currencySuffix;
}
