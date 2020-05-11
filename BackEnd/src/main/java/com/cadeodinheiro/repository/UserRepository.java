package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
