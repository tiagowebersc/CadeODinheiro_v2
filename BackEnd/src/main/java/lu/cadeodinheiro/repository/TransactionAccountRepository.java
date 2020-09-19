package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.transactionAccount.TransactionAccount;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionAccountRepository extends CrudRepository<TransactionAccount, String> {
}
