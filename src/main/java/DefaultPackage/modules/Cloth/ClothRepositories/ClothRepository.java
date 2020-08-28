package DefaultPackage.modules.Cloth.ClothRepositories;

import DefaultPackage.modules.Cloth.ClothModels.ClothModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public  interface  ClothRepository extends JpaRepository<ClothModel, Long> {

}