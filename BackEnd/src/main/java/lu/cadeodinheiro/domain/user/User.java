package lu.cadeodinheiro.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @JsonIgnore
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long idUser;

    @JsonIgnore
    private Date creationDate;

    @Column(length = 150, unique = true, nullable = false)
    private String username;

    @Column(length = 60, nullable = false)
    @JsonIgnore
    private String hashPassword;

    @Column(length = 60, nullable = false)
    private String name;

}