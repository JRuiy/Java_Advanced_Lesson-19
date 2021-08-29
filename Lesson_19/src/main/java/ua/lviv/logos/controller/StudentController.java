package ua.lviv.logos.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ua.lviv.logos.domain.Student;
import ua.lviv.logos.service.StudentService;

@Controller
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/saveStudent")
	@ResponseBody
	public String saveStudent(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, 
			@RequestParam("age") Integer age,  @RequestParam("imagePath") String imagePath, HttpServletRequest req) {
		Student savedStudent = studentService.save(firstName, lastName, age, imagePath);
		return "/profile/"+ savedStudent.getId();
	}
	
	@GetMapping("/profile/{id}")
	public String init(@PathVariable("id") Long id , Model model) throws ServletException, IOException {
		Student student = studentService.getOne(id);
		model.addAttribute("student", student);
		return "profile";
	}

	@GetMapping("/")
	public String index(){
		return "index";
	}
	
}
