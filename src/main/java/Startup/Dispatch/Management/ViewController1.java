package Startup.Dispatch.Management;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/app")
public class ViewController1 {
        @RequestMapping(value="/rest/view",method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity getView()
        {
            return new ResponseEntity(5, HttpStatus.OK);

        }
}
