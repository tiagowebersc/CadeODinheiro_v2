package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @GetMapping(value = "/currencies")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(currencyService.findAll());
    }

    @GetMapping(value = "/currencies/{acronym}")
    public ResponseEntity<?> findByAcronym(@PathVariable(value = "acronym") String acronym){
        return ResponseEntity.ok(currencyService.findByAcronym(acronym));
    }

}
