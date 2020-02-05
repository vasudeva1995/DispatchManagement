package DefaultPackage.Cloth.ClothRepositories;

import DefaultPackage.Cloth.ClothModels.ClothModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public  interface  ClothRepository extends JpaRepository<ClothModal, Long> {

}