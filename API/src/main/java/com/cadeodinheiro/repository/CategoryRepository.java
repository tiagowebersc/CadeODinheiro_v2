package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
