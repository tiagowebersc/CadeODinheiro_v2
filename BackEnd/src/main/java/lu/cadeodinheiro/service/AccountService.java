package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.creditCardSetting.CreditCardSetting;
import lu.cadeodinheiro.repository.AccountRepository;
import lu.cadeodinheiro.repository.CreditCardSettingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private CreditCardSettingRepository creditCardSettingRepository;

    public Iterable<Account> findAll(){
        return accountRepository.findAll();
    }

    public  Account findById(long id){
        return accountRepository.findById(id).orElseThrow();
    }

    // todo: must be find by account id
    public CreditCardSetting findCreditCardSettingById(long id){ return creditCardSettingRepository.findById(id).orElseThrow();
    }
}
