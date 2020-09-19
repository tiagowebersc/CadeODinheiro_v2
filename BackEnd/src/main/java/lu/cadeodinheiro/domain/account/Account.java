package lu.cadeodinheiro.domain.account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.currency.Currency;
import lu.cadeodinheiro.domain.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idAccount;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    private Date creationDate;

    @ManyToOne
    @JoinColumn(name = "currency_acronym")
    private Currency currency;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccountType accountType;

    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 200, nullable = false)
    private String description;

    @Column(precision=16, scale=2)
    private double balance;

    private boolean displayOnDashboard;

    private boolean isActive;

}
