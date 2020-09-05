package lu.cadeodinheiro.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AccountDTO {
    private long idAccount;
    private String currency;
    private String accountType;
    private String name;
    private String description;
    private double balance;
    private boolean displayOnDashboard;
    private boolean active;
}
