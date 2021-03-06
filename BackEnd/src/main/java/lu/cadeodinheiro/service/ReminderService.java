package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.category.Category;
import lu.cadeodinheiro.domain.reminder.Reminder;
import lu.cadeodinheiro.domain.reminder.ReminderType;
import lu.cadeodinheiro.dto.ReminderDTO;
import lu.cadeodinheiro.repository.CategoryRepository;
import lu.cadeodinheiro.repository.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.Optional;

@Service
public class ReminderService {
    @Autowired
    private ReminderRepository reminderRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryRepository categoryRepository;

    public Iterable<Reminder> findAll(){
        return reminderRepository.findAllByUser(userService.getUser());
    }

    public  Reminder findById(String id){
        Reminder reminder = reminderRepository.findById(id).orElseThrow();
        if (!reminder.getUser().getIdUser().equals(userService.getUser().getIdUser())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect id!");
        }
        return reminder;
    }

    public Reminder edit(String id, ReminderDTO reminder){
        if (id == null || id.isEmpty() || reminder.getIdReminder() == null || reminder.getIdReminder().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incomplete request!");
        }
        if (!id.equals(reminder.getIdReminder())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect id!");
        }
        return save(reminder);
    }

    public Reminder save(ReminderDTO reminder){
        if (reminder == null ||
                reminder.getReminderType() == null ||
                reminder.getCategory().isEmpty() ||
                reminder.getDescription() == null ||
                reminder.getReminderType().isEmpty() ||
                reminder.getDescription().isEmpty() ||
                reminder.getAmount() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incomplete request!");
        }
        Reminder newReminder;
        if (reminder.getIdReminder() == null || reminder.getIdReminder().isEmpty()) {
            newReminder = new Reminder();
            newReminder.setCreationDate(new Date(System.currentTimeMillis()));
            newReminder.setUser(userService.getUser());
        } else {
            Optional<Reminder> currentReminder = reminderRepository.findById(reminder.getIdReminder());
            newReminder = currentReminder.get();
            if (!newReminder.getUser().getIdUser().equals(userService.getUser().getIdUser())){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incompatible user!");
            }
        }
        Optional<Category> category = categoryRepository.findById(reminder.getCategory());
        newReminder.setCategory(category.get());
        newReminder.setReminderType(ReminderType.valueOf(reminder.getReminderType()));
        newReminder.setDescription(reminder.getDescription());
        newReminder.setAmount(reminder.getAmount());
        newReminder.setStartDate(reminder.getStartDate());
        newReminder.setEndDate(reminder.getEndDate());
        newReminder.setActive(reminder.isActive());

        return reminderRepository.save(newReminder);
    }
}
