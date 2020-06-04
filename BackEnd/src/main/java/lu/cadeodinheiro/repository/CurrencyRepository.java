package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.currency.Currency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends CrudRepository<Currency, String> {
}
