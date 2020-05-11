package com.cadeodinheiro.domain;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "reminder")
public class Reminder {
    @Id
    @GeneratedValue
    private Long idReminder;

    @ManyToOne
    private User user;

    @ManyToOne
    private Category category;

    @Column(length = 100)
    private String description;

    @Column
    private BigDecimal amount;

    @Column
    private Date startDate;

    @Column
    private Date endDate;

    @Column
    private ReminderType reminderType;

    @Column
    private Boolean isActive;

}
