package lu.cadeodinheiro.domain.budgetCategory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.budget.Budget;
import lu.cadeodinheiro.domain.category.Category;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "budgetCategory")
public class BudgetCategory {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(length = 40)
    private String idBudgetCategory;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "budget_id")
    private Budget budget;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
