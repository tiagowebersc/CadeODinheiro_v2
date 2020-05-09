package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Currency;
import org.springframework.data.repository.CrudRepository;

public interface CurrencyRepository extends CrudRepository<Currency, String> {
}
