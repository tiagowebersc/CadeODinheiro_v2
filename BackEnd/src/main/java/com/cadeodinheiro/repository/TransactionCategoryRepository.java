package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.TransactionCategory;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface TransactionCategoryRepository extends ReactiveCrudRepository<TransactionCategory, Long> {
}
