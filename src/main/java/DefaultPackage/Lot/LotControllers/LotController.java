package DefaultPackage.Lot.LotControllers;

import DefaultPackage.Lot.LotModels.LotModel;
import DefaultPackage.Lot.LotRepositories.LotRepository;
import DefaultPackage.Lot.LotServices.LotService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class LotController {

    @Autowired
    private LotService lotService;

    @Autowired
    private LotRepository lotRepository;

    @RequestMapping(value="/rest/v1/getLots/{pageNo}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<LotModel>> getLots(@PathVariable("pageNo") Integer pageNo){
        Page<LotModel> lotModels =  lotService.getLots(pageNo);
        return new ResponseEntity<List<LotModel>>(lotModels.getContent(), HttpStatus.OK);
    }
    @Transactional
    @RequestMapping(value="/rest/v1/setLot", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity setLot(@RequestBody LotModel lot) throws Exception{

        Boolean isNotUniqueLotNumber = lotService.checkIsUniqueLotNumber(lot.getLotNo());
        if(!isNotUniqueLotNumber) {
            LotModel lotResult = lotRepository.save(lot);
            return new ResponseEntity(lotResult, HttpStatus.OK);
        }
        else
            throw new Exception("Lot number already exists");
    }
    @RequestMapping(value="/rest/v1/updateChallans", method = RequestMethod.PUT)
    ResponseEntity updateChallans(@RequestParam("lotNo") Integer lotNo, @RequestParam("challans") String challans, @RequestParam("status") String status){
       try {
           ObjectMapper objectMapper = new ObjectMapper();
           Map<String, Object> datamap = null;
           datamap = objectMapper.readValue(challans,new TypeReference<Map<String, Object>>() {});
           lotRepository.updateChallansForLotNo(datamap, lotNo, status);
           return new ResponseEntity(HttpStatus.OK);
       }
       catch (Exception e)
       {
           System.out.print(e);
           return new ResponseEntity(HttpStatus.BAD_REQUEST);
       }
    }
    @Transactional
    @RequestMapping(value="/rest/v1/getLot/{lotId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<LotModel> getLot(@PathVariable Long lotId){
        Optional<LotModel> lotModelResult =  lotRepository.findById(lotId);
        if(lotModelResult.isPresent()){
           return new ResponseEntity<LotModel>(lotModelResult.get(), HttpStatus.OK);
        }
        else
           return new ResponseEntity<LotModel>(HttpStatus.BAD_REQUEST);
    }
}
