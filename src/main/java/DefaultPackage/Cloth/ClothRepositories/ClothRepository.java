package DefaultPackage.Cloth.ClothRepositories;

import DefaultPackage.Cloth.ClothModels.ClothModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public  interface  ClothRepository extends JpaRepository<ClothModel, Long> {

}