package lu.cadeodinheiro.domain.transactionCategory;

import lombok.Data;
import lu.cadeodinheiro.domain.category.Category;
import lu.cadeodinheiro.domain.category.CategoryType;
import lu.cadeodinheiro.domain.transaction.Transaction;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "transactionCategory")
public class TransactionCategory {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idTransactionCategory;

    @ManyToOne
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryType categoryType;

    @Column(precision = 16, scale = 2)
    private double amount;
}
