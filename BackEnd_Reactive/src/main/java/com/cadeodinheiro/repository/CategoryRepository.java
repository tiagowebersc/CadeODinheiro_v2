package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Category;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface CategoryRepository extends ReactiveCrudRepository<Category, Long> {
}
