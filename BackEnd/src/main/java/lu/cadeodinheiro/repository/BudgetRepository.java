package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.budget.Budget;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepository  extends FilteredCrudRepository<Budget, String> {
}
