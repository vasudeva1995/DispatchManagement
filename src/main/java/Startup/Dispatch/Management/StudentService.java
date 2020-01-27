package Startup.Dispatch.Management;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

@Service
public class StudentService {
    @Inject
    private StudentRepository studentRepository;
    private final Logger log = LoggerFactory.getLogger(StudentService.class);

    public List<Student> getStudentDetails(String name){
        List<Student> students = studentRepository.getStudentByName(name);
       return students;
   }
}
