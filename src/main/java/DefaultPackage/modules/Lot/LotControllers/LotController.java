package DefaultPackage.modules.Lot.LotControllers;

import DefaultPackage.modules.Lot.LotModels.ESLotModel;
import DefaultPackage.modules.Lot.LotModels.LotModel;
import DefaultPackage.modules.Lot.LotRepositories.ESLotRepository;
import DefaultPackage.modules.Lot.LotRepositories.LotRepository;
import DefaultPackage.modules.Lot.LotServices.ESLotService;
import DefaultPackage.modules.Lot.LotServices.LotService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.elasticsearch.action.get.GetRequestBuilder;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.ml.PostDataRequest;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
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

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;

@RestController
@RequestMapping("/app")
public class LotController {

    @Autowired
    private LotService lotService;

    @Autowired
    private ESLotService esLotService;

    @Autowired
    private LotRepository lotRepository;

    @Autowired
    private ESLotRepository esLotRepository;

    @Autowired
    Client client;

    @RequestMapping(value="/rest/v1/getLots/{pageNo}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<LotModel>> getLots(@PathVariable("pageNo") Integer pageNo){
        Page<LotModel> lotModels =  lotService.getLots(pageNo);
        SearchResponse searchResponse = client.prepareSearch("dispatch_management")
                                              .setTypes("Lots")
                                              .setSearchType(SearchType.QUERY_THEN_FETCH)
                                              .get();
        SearchResponse searchResponsewithFilter = client.prepareSearch("dispatch_management")
                                                  .setTypes("Lots")
                                                  .setSearchType(SearchType.QUERY_THEN_FETCH)
                                                  .setQuery(QueryBuilders.termQuery("lotNo",7))
                                                  .get();
                 System.out.println("ESFullSerach =>> "+ searchResponse);
                 System.out.println("ES Search With Filters =>> "+ searchResponsewithFilter);

        return new ResponseEntity<List<LotModel>>(lotModels.getContent(), HttpStatus.OK);
    }
    @Transactional
    @RequestMapping(value="/rest/v1/setLot", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity setLot(@RequestBody LotModel lot) throws Exception{
        PostDataRequest.JsonBuilder jsonBuilder = new PostDataRequest.JsonBuilder();
         Boolean isNotUniqueLotNumber = lotService.checkIsUniqueLotNumber(lot.getLotNo());
        if(!isNotUniqueLotNumber){
            LotModel lotResult = lotRepository.save(lot);
            IndexResponse response = client.prepareIndex("dispatch_management","Lots",lotResult.getId().toString())
                    .setSource(
                            jsonBuilder().startObject()
                            .field("id",lotResult.getId())
                            .field("companyId",lotResult.getCompanyId())
                            .field("lotNo",lotResult.getLotNo())
                            .field("clothNo",lotResult.getClothNo())
                            .field("status",lotResult.getStatus())
                            .field("brand",lotResult.getBrand())
                            .field("challans",lotResult.getChallans())
                            .field("sizes",lotResult.getSizes())
                            .endObject()
                    ).get();
            System.out.println("ES Lot Added Response -> " + response.getResult().toString());
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
        Optional<LotModel> lotModelResult =  lotRepository.findByLotId(1,lotId.intValue());
        if(lotModelResult.isPresent()){
            GetRequestBuilder getResponse = client.prepareGet("dispatch_management", "lots", lotId.toString());
            System.out.println("ESLotResponse =>>"+getResponse.get());
            return new ResponseEntity<LotModel>(lotModelResult.get(), HttpStatus.OK);
        }
        else
           return new ResponseEntity<LotModel>(HttpStatus.BAD_REQUEST);
    }
}
