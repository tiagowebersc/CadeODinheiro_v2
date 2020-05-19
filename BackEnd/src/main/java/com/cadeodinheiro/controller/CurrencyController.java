package com.cadeodinheiro.controller;

import com.cadeodinheiro.domain.Currency;
import com.cadeodinheiro.repository.CurrencyRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/currencies")
public class CurrencyController {

    private CurrencyRepository currencies;

    public CurrencyController(CurrencyRepository currencies){
        this.currencies = currencies;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('USER')")
    public Flux<Currency> all() {
        return this.currencies.findAll();
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Currency> create(@RequestBody Currency post) {
        return this.currencies.save(post);
    }

    @GetMapping("/{acronym}")
    @PreAuthorize("hasRole('USER')")
    public Mono<Currency> get(@PathVariable("acronym") String acronym) {
        return this.currencies.findById(acronym);
    }

    @PutMapping("/{acronym}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Currency> update(@PathVariable("acronym") String acronym, @RequestBody Currency currency) {
        return this.currencies.findById(acronym)
                .map(p -> {
                    p.setAcronym(currency.getAcronym());
                    p.setName(currency.getName());
                    p.setCurrencyPrefix(currency.getCurrencyPrefix());
                    p.setCurrencySuffix(currency.getCurrencySuffix());
                    return p;
                })
                .flatMap(p -> this.currencies.save(p));
    }

    @DeleteMapping("/{acronym}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<Void> delete(@PathVariable("acronym") String acronym) {
        return this.currencies.deleteById(acronym);
    }
}
