package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Iterable<Account> findAll(){
        return accountRepository.findAll();
    }

    public  Account findById(long id){
        return accountRepository.findById(id).orElseThrow();
    }
}
