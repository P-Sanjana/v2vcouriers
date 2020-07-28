package com.v2vCouriers.myapp.jwtauthentication.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.v2vCouriers.myapp.jwtauthentication.model.CourierData;
import com.v2vCouriers.myapp.jwtauthentication.security.services.JsonServerDetailsService;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class JsonTestRestAPIs {
	
	@Autowired
	private JsonServerDetailsService jsonServerDetailsService;
	

	//Sample request
	//https://localhost:8443/v2vcouriers/jsontest/{id}
	@GetMapping("/jsontest/{id}")
	public CourierData getCourierById(@PathVariable Long id) throws Exception {

	   return jsonServerDetailsService.getPostById(id);
	   
	}

}
