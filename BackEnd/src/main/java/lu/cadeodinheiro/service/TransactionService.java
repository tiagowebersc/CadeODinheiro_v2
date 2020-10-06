package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.transaction.Transaction;
import lu.cadeodinheiro.repository.LinkedTransactionsRepository;
import lu.cadeodinheiro.repository.TransactionAccountRepository;
import lu.cadeodinheiro.repository.TransactionCategoryRepository;
import lu.cadeodinheiro.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private TransactionAccountRepository transactionAccountRepository;
    @Autowired
    private TransactionCategoryRepository transactionCategoryRepository;
    @Autowired
    private LinkedTransactionsRepository linkedTransactionsRepository;

    public Iterable<Transaction> findAll(){
        return transactionRepository.findAllByUser(userService.getUser());
    }

    public  Transaction findById(String id){
        Transaction transaction = transactionRepository.findById(id).orElseThrow();
        if (!transaction.getUser().getIdUser().equals(userService.getUser().getIdUser())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect id!");
        }
        return transaction;
    }
}
