package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.account.Account;
import lu.cadeodinheiro.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends FilteredCrudRepository<Account, String> {

    List<Account> findByUserAndIsActiveAndDisplayOnDashboardOrderByName(User user, boolean isActive, boolean displayOnDashboard);
}
