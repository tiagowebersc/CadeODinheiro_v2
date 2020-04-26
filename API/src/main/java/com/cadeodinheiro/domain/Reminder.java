package com.cadeodinheiro.domain;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "reminder")
public class Reminder {
    @Id
    @GeneratedValue
    private Long idReminder;

    @Column(length = 100)
    private String description;

    @Column
    private BigDecimal amount;

    @Column
    private Date startDate;

    @Column
    private Date endDate;

    // enum
    @Column
    private String reminderType;

    @Column
    private Boolean isActive;

}
