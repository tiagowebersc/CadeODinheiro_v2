package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Account;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface AccountRepository extends ReactiveCrudRepository<Account, Long> {
}
