package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "user")
public class User {
    @Id
    @GeneratedValue
    private Long idUser;

    @Column(length = 150)
    private String login;

    @Column(length = 60)
    private String hashPassword;

    @Column(length = 60)
    private String name;
}
