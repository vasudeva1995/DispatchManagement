package DefaultPackage.Cloth.ClothControllers;


import DefaultPackage.Cloth.ClothModels.ClothModal;
import DefaultPackage.Cloth.ClothRepositories.ClothRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
public class ClothController {

    @Autowired
    private ClothRepository clothRepositor;

    @RequestMapping(value = "/rest/v1/cloth", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCloth(){
        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/v1/add-cloth", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity createCloth(@RequestBody ClothModal clothModal) throws Exception {
        clothModal = clothRepositor.save(clothModal);
        return new ResponseEntity<>("Success",HttpStatus.OK);
    }
}
