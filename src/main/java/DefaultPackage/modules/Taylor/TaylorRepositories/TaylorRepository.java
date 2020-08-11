package DefaultPackage.modules.Taylor.TaylorRepositories;

import DefaultPackage.modules.Taylor.TaylorModels.TaylorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaylorRepository extends JpaRepository<TaylorModel,Long> {
}
