package DefaultPackage.modules.RetailerBills.RetailerBillControllers;

import DefaultPackage.modules.RetailerBills.RetailerBillModels.RetailerBill;
import DefaultPackage.modules.RetailerBills.RetailerBillRepositories.RetailerBillRepository;
import DefaultPackage.modules.RetailerBills.RetailerBillServices.RetailerBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class RetailerBillController {

    @Autowired
    private RetailerBillService retailerBillService;

    @Autowired
    private RetailerBillRepository retailerBillRepository;

    @RequestMapping(value="/rest/v1/getRetailerBills/{pageNo}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<RetailerBill>> getBills(@PathVariable("pageNo") Integer pageNo){
        Page<RetailerBill> retailerBills =  retailerBillService.getBills(pageNo);
        return new ResponseEntity<List<RetailerBill>>(retailerBills.getContent(), HttpStatus.OK);
    }
    @RequestMapping(value="/rest/v1/setRetailerBill", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity setRetailerBill(@RequestBody RetailerBill bill) throws Exception{

        Boolean isNotUniqueBillNumber = retailerBillService.checkIsUniqueBillNumber(bill.getBillNo());
        if(!isNotUniqueBillNumber) {
            RetailerBill retailerBillResult = retailerBillRepository.save(bill);
            return new ResponseEntity(retailerBillResult, HttpStatus.OK);
        }
        else
            throw new Exception("Bill number already exists");
    }
    @RequestMapping(value="/rest/v1/updateBills", method = RequestMethod.PUT)
    ResponseEntity updateBills(@RequestParam("billNo") Integer billNo, @RequestParam("amountPaid") Integer amountPaid){
        try {

           retailerBillRepository.updateAmountForBillNo(billNo, amountPaid);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception e)
        {
            System.out.print(e);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
    @RequestMapping(value="/rest/v1/getBill/{billId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<RetailerBill> getBill(@PathVariable Long billId){
        Optional<RetailerBill> retailerBillResult =  retailerBillRepository.findById(billId);
        if(retailerBillResult.isPresent()){
            return new ResponseEntity<RetailerBill>(retailerBillResult.get(), HttpStatus.OK);
        }
        else
            return new ResponseEntity<RetailerBill>(HttpStatus.BAD_REQUEST);
    }
}
