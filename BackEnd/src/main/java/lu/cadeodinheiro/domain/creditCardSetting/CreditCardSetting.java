package lu.cadeodinheiro.domain.creditCardSetting;

import lombok.Data;
import lu.cadeodinheiro.domain.account.Account;

import javax.persistence.*;

@Data
@Entity
@Table(name = "creditCardSetting")
public class CreditCardSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_creditCardSetting;

    @OneToOne
    @JoinColumn(name = "account_id")
    private Account account;

    private int billClosingDay;

}
