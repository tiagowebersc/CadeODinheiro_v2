package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.transaction.Transaction;
import lu.cadeodinheiro.repository.LinkedTransactionsRepository;
import lu.cadeodinheiro.repository.TransactionAccountRepository;
import lu.cadeodinheiro.repository.TransactionCategoryRepository;
import lu.cadeodinheiro.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private TransactionAccountRepository transactionAccountRepository;
    @Autowired
    private TransactionCategoryRepository transactionCategoryRepository;
    @Autowired
    private LinkedTransactionsRepository linkedTransactionsRepository;

    public Iterable<Transaction> findAll(){
        return transactionRepository.findAll();
    }

    public  Transaction findById(String id){
        return transactionRepository.findById(id).orElseThrow();
    }
}
