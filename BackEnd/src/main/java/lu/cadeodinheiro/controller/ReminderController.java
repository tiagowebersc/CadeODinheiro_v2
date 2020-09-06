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
    public ResponseEntity<?> findById(@PathVariable(value = "id") long id){
        return ResponseEntity.ok(reminderService.findById(id));
    }

    @PostMapping(value ="/reminders")
    public ResponseEntity<?> createAccount(@RequestBody ReminderDTO account){
        return ResponseEntity.ok(reminderService.save(account));
    }
}
