package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.category.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {
}
