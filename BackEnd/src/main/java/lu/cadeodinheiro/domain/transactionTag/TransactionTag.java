package lu.cadeodinheiro.domain.transactionTag;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.tag.Tag;
import lu.cadeodinheiro.domain.transaction.Transaction;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "transactionTag")
public class TransactionTag {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idTransactionTag;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;
}
