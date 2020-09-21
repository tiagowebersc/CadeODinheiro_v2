package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.dto.AccountDTO;
import lu.cadeodinheiro.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders={"content-type", "x-auth-token", "x-requested-with", "x-xsrf-token", "Authorization"})
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/accounts")
    public ResponseEntity<?> findAll() { return ResponseEntity.ok(accountService.findAll()); }

    @GetMapping(value = "/accounts/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") String id){
        return ResponseEntity.ok(accountService.findById(id));
    }

    @PostMapping(value ="/accounts")
    public ResponseEntity<?> createAccount(@RequestBody AccountDTO account){
        return ResponseEntity.ok(accountService.save(account));
    }

    @PutMapping(value ="/accounts/{id}")
    public ResponseEntity<?> editAccount(@PathVariable(value = "id") String id, @RequestBody AccountDTO account){
        System.out.println(id);
        return ResponseEntity.ok(accountService.edit(id, account));
    }
}
