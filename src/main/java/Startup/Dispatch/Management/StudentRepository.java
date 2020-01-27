package Startup.Dispatch.Management;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

    @Query("select r from Student r where r.name = ?1")
    List<Student> getStudentByName(String name);
}
