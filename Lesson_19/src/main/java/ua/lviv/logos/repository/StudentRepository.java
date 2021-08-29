package ua.lviv.logos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ua.lviv.logos.domain.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
