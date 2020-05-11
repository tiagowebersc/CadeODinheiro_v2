package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Transaction;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
}
