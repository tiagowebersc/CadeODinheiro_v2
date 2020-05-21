package com.cadeodinheiro.service;

import com.cadeodinheiro.domain.Currency;
import com.cadeodinheiro.repository.CurrencyRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CurrencyService {

    private CurrencyRepository currencies;

    public CurrencyService(CurrencyRepository currencies){
        this.currencies = currencies;
    }

    public Flux<Currency> getAll() {
        return this.currencies.findAll();
    }

    public Mono<Currency> create(Currency currency) {
            return currencies.save(currency);
    }

    public Mono<Currency> get(String acronym) {
        return this.currencies.findById(acronym);
    }

    public Mono<Currency> update(String acronym, Currency currency) {
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

    public Mono<Void> delete(String acronym) {
        return this.currencies.deleteById(acronym);
    }

}
