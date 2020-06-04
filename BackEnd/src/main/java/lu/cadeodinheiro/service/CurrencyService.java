package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.currency.Currency;
import lu.cadeodinheiro.repository.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurrencyService {
    @Autowired
    private CurrencyRepository currencyRepository;

    public Iterable<Currency> findAll(){
        return currencyRepository.findAll();
    }

    public  Currency findByAcronym(String acronym){
        return currencyRepository.findById(acronym).orElseThrow();
    }
}
