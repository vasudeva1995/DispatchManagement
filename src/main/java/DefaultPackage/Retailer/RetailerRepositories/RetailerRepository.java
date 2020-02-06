package DefaultPackage.Retailer.RetailerRepositories;

import DefaultPackage.Retailer.RetailerModels.RetailerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RetailerRepository extends JpaRepository<RetailerModel, Long> {
}
