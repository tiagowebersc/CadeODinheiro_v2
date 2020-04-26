package com.cadeodinheiro.domain;

import javax.persistence.*;

@Entity(name = "category")
public class Category {
    @Id
    @GeneratedValue
    private Long idCategory;

    @ManyToOne
    private User user;

    @Column
    private CategoryType categoryType;

    @Column(length = 60)
    private String description;

    @Column
    private Boolean isActive;

    @ManyToOne
    @Column(name = "upperCategory_idCategory")
    private Category upperCategory;
}
