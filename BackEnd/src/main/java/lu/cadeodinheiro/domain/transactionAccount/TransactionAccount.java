package lu.cadeodinheiro.domain.transactionAccount;

import lombok.Data;
import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.transaction.Transaction;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "transactionAccount")
public class TransactionAccount {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String id_transaction_account;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    @Column(precision = 16, scale = 2)
    private double amount;
}
