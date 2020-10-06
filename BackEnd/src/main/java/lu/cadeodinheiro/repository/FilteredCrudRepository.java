package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.user.User;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@NoRepositoryBean
public interface FilteredCrudRepository<T, ID> extends CrudRepository<T, ID>  {
    Iterable<T> findAllByUser(User user);
}