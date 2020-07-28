package com.v2vCouriers.myapp.jwtauthentication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.v2vCouriers.myapp.jwtauthentication.model.Graph;


@Repository
public interface GraphRepository  extends JpaRepository<Graph, Long>{
	
	List<Graph> findAll();
}
