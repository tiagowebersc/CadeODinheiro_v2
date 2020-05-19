package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface UserRepository extends ReactiveCrudRepository<User, Long> {
}
