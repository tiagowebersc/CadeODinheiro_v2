package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Transaction;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface TransactionRepository extends ReactiveCrudRepository<Transaction, Long> {
}
