package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.budget.Budget;
import lu.cadeodinheiro.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;
    @Autowired
    private UserService userService;

    public Iterable<Budget> findAll(){
        return budgetRepository.findAllByUser(userService.getUser());
    }

    public  Budget findById(String id){
        Budget budget = budgetRepository.findById(id).orElseThrow();
        if (!budget.getUser().getIdUser().equals(userService.getUser().getIdUser())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect id!");
        }
        return budget;
    }
}
