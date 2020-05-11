package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {
}
