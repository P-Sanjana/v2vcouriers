package com.v2vCouriers.myapp.jwtauthentication.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.Graph;
import com.v2vCouriers.myapp.jwtauthentication.repository.GraphRepository;

@Service
public class GraphDetailsService {

	@Autowired
	private GraphRepository graphRepository;
	
	public List<Graph> findAll(){
		
		List<Graph> graphs = graphRepository.findAll();
		return graphs;
	}
}
