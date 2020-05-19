package com.cadeodinheiro.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("reminder")
public class Reminder extends UserDate{
    @Id
    //@GeneratedValue
    private Long idReminder;

    //@ManyToOne
    private Category category;

    //@Column(length = 100)
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
