package DefaultPackage.modules.Retailer.RetailerRepositories;

import DefaultPackage.modules.Retailer.RetailerModels.RetailerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RetailerRepository extends JpaRepository<RetailerModel, Long> {
}
