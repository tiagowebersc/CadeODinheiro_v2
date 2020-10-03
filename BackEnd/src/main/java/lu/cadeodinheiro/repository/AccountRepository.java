package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, String> {
    List<Account> findByUserAndIsActiveAndDisplayOnDashboardOrderByName(User user, boolean isActive, boolean displayOnDashboard);
}
