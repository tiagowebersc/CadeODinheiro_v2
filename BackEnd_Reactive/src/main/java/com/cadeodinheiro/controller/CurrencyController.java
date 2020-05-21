package com.cadeodinheiro.controller;

import com.cadeodinheiro.domain.Currency;
import com.cadeodinheiro.service.CurrencyService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/currencies")
public class CurrencyController {

    private CurrencyService currencies;

    public CurrencyController(CurrencyService currencies){
        this.currencies = currencies;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('USER')")
    public Flux<Currency> all() {
        return this.currencies.getAll();
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Currency> create(@RequestBody Currency currency) {
        return this.currencies.create(currency);
    }

    @GetMapping("/{acronym}")
    @PreAuthorize("hasRole('USER')")
    public Mono<Currency> get(@PathVariable("acronym") String acronym) {
        return this.currencies.get(acronym);
    }

    @PutMapping("/{acronym}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Currency> update(@PathVariable("acronym") String acronym, @RequestBody Currency currency) {
        return this.currencies.update(acronym, currency);
    }

    @DeleteMapping("/{acronym}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Void> delete(@PathVariable("acronym") String acronym) {
        return this.currencies.delete(acronym);
    }
}
