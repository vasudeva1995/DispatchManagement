package DefaultPackage.Brand.BrandControllers;

import DefaultPackage.Brand.BrandModels.BrandModel;
import DefaultPackage.Brand.BrandRepositories.BrandRepository;
import DefaultPackage.Cloth.ClothModels.ClothModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class BrandController {

    @Autowired
    private BrandRepository brandRepository;

    @RequestMapping(value = "/rest/v1/brands", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BrandModel>> getBrands(){
        List<BrandModel> brandModels = brandRepository.findAll();

        return new ResponseEntity<List<BrandModel>>(brandModels, HttpStatus.OK);
    }
    @RequestMapping(value = "/rest/v1/brand/{brandId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BrandModel> getBrandById(@PathVariable("brandId") Long brandId) throws Exception {
        Optional<BrandModel> brandModelResult = brandRepository.findById(brandId);
        if(!brandModelResult.isPresent()){
            throw new Exception("Not found");
        }

        BrandModel brandModel = brandModelResult.get();
        return new ResponseEntity<BrandModel>(brandModel, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/v1/addBrand", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BrandModel> addBrand(@RequestBody BrandModel brandModel) throws Exception {
        brandModel = brandRepository.save(brandModel);
        return new ResponseEntity<BrandModel>(brandModel,HttpStatus.OK);
    }
}
