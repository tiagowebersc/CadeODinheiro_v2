package lu.cadeodinheiro.domain.linkedTransactions;

import lombok.Data;
import lu.cadeodinheiro.domain.transaction.Transaction;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "linkedTransactions")
public class LinkedTransactions {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idLinkedTransactions;

    @ManyToOne
    @JoinColumn(name = "transaction_id_origin")
    private Transaction origin;

    @ManyToOne
    @JoinColumn(name = "transaction_id_destiny")
    private Transaction destiny;

}
