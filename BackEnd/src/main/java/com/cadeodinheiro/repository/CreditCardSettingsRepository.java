package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.CreditCardSettings;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface CreditCardSettingsRepository extends ReactiveCrudRepository<CreditCardSettings, Long> {
}
