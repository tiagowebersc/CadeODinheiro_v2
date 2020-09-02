package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.transactionCategory.TransactionCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionCategoryRepository extends CrudRepository<TransactionCategory, Long> {
}
