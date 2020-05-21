package com.cadeodinheiro.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import java.math.BigDecimal;

@Data
@Table("account")
public class Account extends UserDate {
    @Id
    @Column("idAccount")
    private Long idAccount;

    @Column("currency_acronym")
    private String currencyAcronym;

    @Column("accountType")
    private AccountType accountType;

    @Column("name")
    private String name;

    @Column("description")
    private String description;

    @Column("balance")
    private BigDecimal balance;

    @Column("displayOnResumeScreen")
    private Boolean displayOnResumeScreen;

    @Column("isActive")
    private Boolean isActive;

}
