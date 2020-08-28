package DefaultPackage.modules.Taylor.TaylorControllers;

import DefaultPackage.modules.Taylor.TaylorModels.TaylorModel;
import DefaultPackage.modules.Taylor.TaylorRepositories.TaylorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class TaylorController {

    @Autowired
    private TaylorRepository taylorRepository;

    @RequestMapping(value = "/rest/v1/taylors", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TaylorModel>> getTaylors(){
        List<TaylorModel> taylorModels = taylorRepository.findAll();

        return new ResponseEntity<List<TaylorModel>>(taylorModels, HttpStatus.OK);
    }
    @RequestMapping(value = "/rest/v1/taylor/{taylorId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TaylorModel> getTaylorById(@PathVariable("taylorId") Long brandId) throws Exception {
        Optional<TaylorModel> taylorModelResult = taylorRepository.findById(brandId);
        if(!taylorModelResult.isPresent()){
            throw new Exception("Not found");
        }

        TaylorModel taylorModel = taylorModelResult.get();
        return new ResponseEntity<TaylorModel>(taylorModel, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/v1/addTaylor", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TaylorModel> addTaylor(@RequestBody TaylorModel taylorModel) throws Exception {
       TaylorModel taylorModel1 = taylorRepository.save(taylorModel);
        return new ResponseEntity<TaylorModel>(taylorModel,HttpStatus.OK);
    }
}
