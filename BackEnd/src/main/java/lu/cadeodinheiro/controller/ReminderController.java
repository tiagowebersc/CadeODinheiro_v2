package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.service.ReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token", "Authorization"})
public class ReminderController {
    @Autowired
    private ReminderService reminderService;

    @GetMapping("/reminders")
    public ResponseEntity<?> findAll() { return ResponseEntity.ok(reminderService.findAll()); }

    @GetMapping(value = "/reminders/{id}")
    public ResponseEntity<?> findByAcronym(@PathVariable(value = "id") long id){
        return ResponseEntity.ok(reminderService.findById(id));
    }
}
