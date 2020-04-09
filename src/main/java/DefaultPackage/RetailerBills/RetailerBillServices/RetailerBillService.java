package DefaultPackage.RetailerBills.RetailerBillServices;

import DefaultPackage.Lot.LotModels.LotModel;
import DefaultPackage.Lot.LotRepositories.LotRepository;
import DefaultPackage.RetailerBills.RetailerBillModels.RetailerBill;
import DefaultPackage.RetailerBills.RetailerBillRepositories.RetailerBillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RetailerBillService {

    @Autowired
    private RetailerBillRepository retailerBillRepository;

    public Page<RetailerBill> getBills(Integer pageNo) {
        Pageable pageSpecification = PageRequest.of((pageNo - 1) ,10,Sort.Direction.DESC,"id");
        Page<RetailerBill> billModels = retailerBillRepository.findPaginatedBills(1,pageSpecification);
        return billModels;
    }

    public Boolean checkIsUniqueBillNumber(Integer billNumber) {
        return retailerBillRepository.checkUniqueBillNumber(billNumber);
    }
}
