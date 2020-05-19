package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Reminder;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ReminderRepository extends ReactiveCrudRepository<Reminder, Long> {
}
