package com.cadeodinheiro.domain;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import java.util.Date;

@Data
@Table("user")
public class User {
    @Id
    //@GeneratedValue
    private Long idUser;

    private Date creationDate;

    //@Column(length = 150)
    private String username;

    //@Column(length = 60)
    private String hashPassword;

    //@Column(length = 60)
    private String name;
}
