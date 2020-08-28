package DefaultPackage.modules.Retailer.RetailerControllers;

import DefaultPackage.modules.Retailer.RetailerModels.RetailerModel;
import DefaultPackage.modules.Retailer.RetailerRepositories.RetailerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/app")
public class RetailerController {

    @Autowired
    private RetailerRepository retailerRepository;

    @RequestMapping(value = "/rest/v1/add-retailer", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RetailerModel> addRetailer(@RequestBody RetailerModel retailerModel) throws Exception{
        retailerModel = retailerRepository.save(retailerModel);
        return new ResponseEntity<RetailerModel>(retailerModel, HttpStatus.OK);
    }

    @RequestMapping(value = "rest/v1/get-retailer", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RetailerModel>> getRetailer(){
        List<RetailerModel> retailerModelList = retailerRepository.findAll();
        return new ResponseEntity<List<RetailerModel>>(retailerModelList, HttpStatus.OK);
    }
}
