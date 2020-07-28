package com.v2vCouriers.myapp.jwtauthentication.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.v2vCouriers.myapp.jwtauthentication.model.SenderPrice;

public interface SenderPriceRepository extends JpaRepository<SenderPrice, Long> {

	Optional<SenderPrice> findById(Long id);
	SenderPrice findByCourierid(Long courierid);
	
	
}
