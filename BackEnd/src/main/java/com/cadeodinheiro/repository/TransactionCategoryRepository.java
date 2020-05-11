package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.TransactionCategory;
import org.springframework.data.repository.CrudRepository;

public interface TransactionCategoryRepository extends CrudRepository<TransactionCategory, Long> {
}
