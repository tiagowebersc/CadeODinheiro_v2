package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.reminder.Reminder;
import lu.cadeodinheiro.repository.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReminderService {
    @Autowired
    private ReminderRepository reminderRepository;

    public Iterable<Reminder> findAll(){
        return reminderRepository.findAll();
    }

    public  Reminder findById(long id){ return reminderRepository.findById(id).orElseThrow(); }
}
