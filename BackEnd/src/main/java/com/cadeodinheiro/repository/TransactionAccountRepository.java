package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.TransactionAccount;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface TransactionAccountRepository extends ReactiveCrudRepository<TransactionAccount, Long> {
}
