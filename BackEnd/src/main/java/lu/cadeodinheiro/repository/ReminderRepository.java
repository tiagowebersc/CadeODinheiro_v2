package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.reminder.Reminder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReminderRepository extends CrudRepository<Reminder, Long> {
}
