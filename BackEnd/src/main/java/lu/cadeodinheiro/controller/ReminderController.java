package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.dto.ReminderDTO;
import lu.cadeodinheiro.service.ReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders={"content-type", "x-auth-token", "x-requested-with", "x-xsrf-token", "Authorization"})
public class ReminderController {
    @Autowired
    private ReminderService reminderService;

    @GetMapping("/reminders")
    public ResponseEntity<?> findAll() { return ResponseEntity.ok(reminderService.findAll()); }

    @GetMapping(value = "/reminders/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") String id){
        return ResponseEntity.ok(reminderService.findById(id));
    }

    @PostMapping(value ="/reminders")
    public ResponseEntity<?> createReminder(@RequestBody ReminderDTO reminder){
        return ResponseEntity.ok(reminderService.save(reminder));
    }

    @PutMapping(value ="/reminders/{id}")
    public ResponseEntity<?> editReminder(@PathVariable(value = "id") String id, @RequestBody ReminderDTO reminder){
        System.out.println(id);
        return ResponseEntity.ok(reminderService.edit(id, reminder));
    }
}
