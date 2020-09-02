package lu.cadeodinheiro.repository;

import lu.cadeodinheiro.domain.creditCardSetting.CreditCardSetting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardSettingRepository extends CrudRepository<CreditCardSetting, Long> {
}
