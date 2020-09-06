package lu.cadeodinheiro.domain.reminder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.category.Category;
import lu.cadeodinheiro.domain.user.User;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "reminder")
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idReminder;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    private Date creationDate;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(length = 100, nullable = false)
    private String description;

    @Column(precision = 16, scale = 2)
    private double amount;

    @Column(nullable = false)
    private Date startDate;

    private Date endDate;

    @Enumerated(EnumType.STRING)
    private ReminderType reminderType;

    private boolean isActive;
}
