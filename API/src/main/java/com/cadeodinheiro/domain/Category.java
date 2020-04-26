package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "category")
public class Category {
    @Id
    @GeneratedValue
    private Long idCategory;

    @Column
    private String categoryType;

    @Column(length = 60)
    private String description;

    @Column
    private Boolean isActive;
}
