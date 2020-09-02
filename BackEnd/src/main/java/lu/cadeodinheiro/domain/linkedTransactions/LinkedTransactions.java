package lu.cadeodinheiro.domain.linkedTransactions;

import lombok.Data;
import lu.cadeodinheiro.domain.transaction.Transaction;

import javax.persistence.*;

@Data
@Entity
@Table(name = "linkedTransactions")
public class LinkedTransactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idLinkedTransactions;

    @ManyToOne
    @JoinColumn(name = "transaction_id_origin")
    private Transaction origin;

    @ManyToOne
    @JoinColumn(name = "transaction_id_destiny")
    private Transaction destiny;

}
