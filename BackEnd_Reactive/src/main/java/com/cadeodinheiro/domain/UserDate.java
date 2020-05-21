package com.cadeodinheiro.domain;


import org.springframework.data.relational.core.mapping.Column;

import java.util.Date;

public class UserDate {
    @Column("user_idUser")
    private Long idUser;

    @Column("creationDate")
    private Date creationDate;
}
