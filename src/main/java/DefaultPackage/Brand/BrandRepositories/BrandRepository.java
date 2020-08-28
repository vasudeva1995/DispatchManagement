package DefaultPackage.Brand.BrandRepositories;

import DefaultPackage.Brand.BrandModels.BrandModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<BrandModel,Long> {

}
