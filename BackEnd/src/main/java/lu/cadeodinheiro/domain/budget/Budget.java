package lu.cadeodinheiro.domain.budget;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "budget")
public class Budget {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idBudget;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    private Date creationDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BudgetType budgetType;


    @Column(length = 60, nullable = false)
    private String description;

    @Column(precision=16, scale=2)
    private double amount;

    @Column(length = 200)
    private String comment;
}
