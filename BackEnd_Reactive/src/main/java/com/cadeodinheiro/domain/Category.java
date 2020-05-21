package com.cadeodinheiro.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("category")
public class Category extends UserDate{
    @Id
    //@GeneratedValue
    private Long idCategory;

    @Column
    private CategoryType categoryType;

    //@Column(length = 60)
    private String description;

    @Column
    private Boolean isActive;

    //@ManyToOne
    @Column("upperCategory_idCategory")
    private Category upperCategory;
}
