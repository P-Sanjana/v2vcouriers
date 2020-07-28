package com.v2vCouriers.myapp.jwtauthentication.controller;



import java.util.Arrays;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.v2vCouriers.myapp.jwtauthentication.model.User;
import com.v2vCouriers.myapp.jwtauthentication.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class UserRestAPIs {

	@Autowired
	UserRepository userRepository;
	
	//https://localhost:8443/v2vcouriers/myaccount
	@GetMapping("/myaccount")
	public List<Object> userDetails () throws Exception {

		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String name= null;
		String username = null;
		String email= null;
		Long points = null;
		
		if (principal instanceof UserDetails) {
		  username = ((UserDetails)principal).getUsername();
		} 
		
		User user = userRepository.findByUsername(username);
		
		name = user.getName();
		email = user.getEmail();
		points = user.getPoints();
		
		return Arrays.asList(name, username, email, points);
		
	}
	

}
