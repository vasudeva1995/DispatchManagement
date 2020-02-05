package DefaultPackage.Cloth.ClothRepositories;

import DefaultPackage.Cloth.ClothModels.ClothModal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public  interface  ClothRepository extends JpaRepository<ClothModal, Long> {

    
}