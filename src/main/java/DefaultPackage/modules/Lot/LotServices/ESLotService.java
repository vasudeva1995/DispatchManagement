package DefaultPackage.modules.Lot.LotServices;

import DefaultPackage.modules.Lot.LotModels.ESLotModel;
import DefaultPackage.modules.Lot.LotModels.LotModel;
import DefaultPackage.modules.Lot.LotRepositories.ESLotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;



@Service
public class ESLotService {

    @Autowired
    ESLotRepository esLotRepository;

//    public Page<ESLotModel> getLots(Integer pageNo) {
//        Pageable pageSpecification = PageRequest.of((pageNo - 1) ,10, Sort.Direction.DESC,"id");
//        Page<ESLotModel> esLotModels = esLotRepository.findPaginatedLots(1,pageSpecification);
//        return esLotModels;
//    }
}
