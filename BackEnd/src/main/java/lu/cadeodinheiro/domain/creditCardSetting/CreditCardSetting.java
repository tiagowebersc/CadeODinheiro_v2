package lu.cadeodinheiro.domain.creditCardSetting;

import lombok.Data;
import lu.cadeodinheiro.domain.account.Account;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "creditCardSetting")
public class CreditCardSetting {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String id_creditCardSetting;

    @OneToOne
    @JoinColumn(name = "account_id")
    private Account account;

    private int billClosingDay;

}
