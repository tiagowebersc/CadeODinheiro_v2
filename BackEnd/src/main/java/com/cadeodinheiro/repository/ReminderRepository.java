package com.cadeodinheiro.repository;

import com.cadeodinheiro.domain.Reminder;
import org.springframework.data.repository.CrudRepository;

public interface ReminderRepository extends CrudRepository<Reminder, Long> {
}
