package lu.cadeodinheiro.domain.transaction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.reminder.Reminder;
import lu.cadeodinheiro.domain.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idTransaction;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    private Date creationDate;

    private Date date;

    @Column(length = 100, nullable = false)
    private String description;

    @Column(precision = 16, scale = 2)
    private double amount;

    @ManyToOne
    @JoinColumn(name = "reminder_id")
    private Reminder reminder;



}
