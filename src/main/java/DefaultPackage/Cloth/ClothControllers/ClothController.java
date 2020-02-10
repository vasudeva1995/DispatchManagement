package DefaultPackage.Cloth.ClothControllers;


import DefaultPackage.Cloth.ClothModels.ClothModel;
import DefaultPackage.Cloth.ClothRepositories.ClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class ClothController {

    @Autowired
    private ClothRepository clothRepositor;

    @RequestMapping(value = "/rest/v1/cloth", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ClothModel>> getCloth(){
        List<ClothModel> clothModelList = clothRepositor.findAll();

        return new ResponseEntity<List<ClothModel>>(clothModelList, HttpStatus.OK);
    }
    @RequestMapping(value = "/rest/v1/cloth/{clothId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClothModel> getOneCloth(@PathVariable("clothId") long clothId) throws Exception {
        Optional<ClothModel> clothModelResult = clothRepositor.findById(clothId);
        if(!clothModelResult.isPresent()){
            throw new Exception("Not found");
        }

        ClothModel clothModel = clothModelResult.get();
        return new ResponseEntity<ClothModel>(clothModel, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/v1/add-cloth", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClothModel> createCloth(@RequestBody ClothModel clothModel) throws Exception {
        clothModel = clothRepositor.save(clothModel);
        return new ResponseEntity<ClothModel>(clothModel,HttpStatus.OK);
    }
}
