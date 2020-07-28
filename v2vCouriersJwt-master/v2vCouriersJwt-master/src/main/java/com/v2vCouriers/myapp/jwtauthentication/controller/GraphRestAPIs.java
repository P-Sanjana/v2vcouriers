package com.v2vCouriers.myapp.jwtauthentication.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.v2vCouriers.myapp.jwtauthentication.message.request.GraphForm;
import com.v2vCouriers.myapp.jwtauthentication.message.response.ResponseMessage;
import com.v2vCouriers.myapp.jwtauthentication.model.Graph;
import com.v2vCouriers.myapp.jwtauthentication.repository.GraphRepository;
import com.v2vCouriers.myapp.jwtauthentication.security.services.GraphDetailsService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class GraphRestAPIs {

	@Autowired
	private GraphDetailsService graphDetailsService;
	
	@Autowired
	GraphRepository graphRepository;
	
	//http://localhost:8080/v2vcouriers/newgraph
	@PostMapping("/newgraph")
	public ResponseEntity<?> saveCourier (@Valid @RequestBody GraphForm graphRequest) throws Exception {

		// Saving the new Courier Details
		Graph graph = new Graph(graphRequest.getPrice(), graphRequest.getMonth());

		graphRepository.save(graph);
			
		return new ResponseEntity<>(new ResponseMessage("Price and Month saved successfully!"), HttpStatus.OK);
			
	}	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/pricebymonth
	@RequestMapping("/graph")
	public List<Graph> getPriceAndMonth() throws Exception {
		return graphDetailsService.findAll();
	}
}
