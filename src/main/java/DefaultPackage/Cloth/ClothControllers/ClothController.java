package DefaultPackage.Cloth.ClothControllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
public class ClothController {
    @RequestMapping(value = "/rest/v1/cloth", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCloth(){
        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
    }
}
