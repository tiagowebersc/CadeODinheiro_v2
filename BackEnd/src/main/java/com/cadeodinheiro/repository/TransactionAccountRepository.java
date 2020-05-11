package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.TransactionAccount;
import org.springframework.data.repository.CrudRepository;

public interface TransactionAccountRepository extends CrudRepository<TransactionAccount, Long> {
}
