package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Currency;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends ReactiveCrudRepository<Currency, String> {

}
