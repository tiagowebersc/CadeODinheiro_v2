package lu.cadeodinheiro.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ReminderDTO {
    private String idReminder;
    private String category;
    private String description;
    private double amount;
    private Date startDate;
    private Date endDate;
    private String reminderType;
    private boolean active;
}
