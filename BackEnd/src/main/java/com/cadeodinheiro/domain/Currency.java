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

    //@Column(length = 60)
    @Column("name")
    private String name;

    //@Column(length = 5)
    @Column("currencyPrefix")
    private String currencyPrefix;

    //@Column(length = 5)
    @Column("currencySuffix")
    private String currencySuffix;
}
