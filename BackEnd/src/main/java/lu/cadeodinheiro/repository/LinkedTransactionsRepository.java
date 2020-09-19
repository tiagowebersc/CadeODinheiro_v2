package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.linkedTransactions.LinkedTransactions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkedTransactionsRepository extends CrudRepository<LinkedTransactions, String> {
}
