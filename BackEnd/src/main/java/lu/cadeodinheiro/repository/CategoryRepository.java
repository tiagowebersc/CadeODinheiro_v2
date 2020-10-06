package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.category.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends FilteredCrudRepository<Category, String> {
}
