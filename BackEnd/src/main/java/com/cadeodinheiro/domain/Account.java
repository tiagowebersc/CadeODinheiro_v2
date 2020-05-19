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
    //@GeneratedValue
    private Long idAccount;

    //@ManyToOne
    private Currency currency;

    @Column
    private AccountType accountType;

    //@Column(length = 60)
    private String name;

    //@Column(length = 200)
    private String description;

    @Column
    private BigDecimal balance;

    @Column
    private Boolean displayOnResumeScreen;

    @Column
    private Boolean isActive;

}
