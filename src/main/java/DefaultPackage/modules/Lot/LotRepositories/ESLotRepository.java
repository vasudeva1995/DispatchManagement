package DefaultPackage.modules.Lot.LotRepositories;

import DefaultPackage.modules.Lot.LotModels.ESLotModel;
import DefaultPackage.modules.Lot.LotModels.LotModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchCrudRepository;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ESLotRepository  extends ElasticsearchRepository<ESLotModel,Long> {
//    Page<ESLotModel> findPaginatedLots(Integer companyId, Pageable pageSpecification);
}
