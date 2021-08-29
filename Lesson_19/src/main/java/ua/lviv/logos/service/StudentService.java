package ua.lviv.logos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.lviv.logos.domain.Student;
import ua.lviv.logos.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;
	
	public Student save(String firstName, String lastName, int age, String imagePath) {
		return studentRepository.save(new Student(firstName, lastName, age, imagePath));
	}

	public Student getOne(Long id){
		return studentRepository.getById(id);
	}
}
