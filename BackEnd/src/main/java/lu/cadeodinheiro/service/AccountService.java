package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.account.AccountType;
import lu.cadeodinheiro.domain.creditCardSetting.CreditCardSetting;
import lu.cadeodinheiro.domain.currency.Currency;
import lu.cadeodinheiro.dto.AccountDTO;
import lu.cadeodinheiro.repository.AccountRepository;
import lu.cadeodinheiro.repository.CreditCardSettingRepository;
import lu.cadeodinheiro.repository.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private CreditCardSettingRepository creditCardSettingRepository;
    @Autowired
    private CurrencyRepository currencyRepository;
    @Autowired
    private UserService userService;

    public Iterable<Account> findAll(){
        return accountRepository.findAll();
    }

    public  Account findById(long id){
        return accountRepository.findById(id).orElseThrow();
    }

    public Account save(AccountDTO account){
        if (account == null ||
            account.getAccountType() == null ||
            account.getCurrency() == null ||
            account.getName() == null ||
            account.getAccountType().isEmpty() ||
            account.getCurrency().isEmpty() ||
            account.getName().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incomplete request!");
        }
        Account newAccount = new Account();
        newAccount.setCreationDate(new Date(System.currentTimeMillis()));
        newAccount.setUser(userService.getUser());
        Optional<Currency> currency = currencyRepository.findById(account.getCurrency());
        newAccount.setCurrency(currency.get());
        newAccount.setAccountType(AccountType.valueOf(account.getAccountType()));
        newAccount.setName(account.getName());
        newAccount.setDescription(account.getDescription());
        newAccount.setActive(account.isActive());
        newAccount.setDisplayOnDashboard(account.isDisplayOnDashboard());
        newAccount.setBalance(account.getBalance());

        return accountRepository.save(newAccount);
    }

    // todo: must be find by account id
    public CreditCardSetting findCreditCardSettingById(long id){ return creditCardSettingRepository.findById(id).orElseThrow();
    }
}
