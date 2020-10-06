package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.transaction.Transaction;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends FilteredCrudRepository<Transaction, String> {
}
