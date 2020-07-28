package com.v2vCouriers.myapp.jwtauthentication.security.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.SenderPrice;
import com.v2vCouriers.myapp.jwtauthentication.repository.SenderPriceRepository;

@Service
public class SenderPriceDetailsService {

	@Autowired
	SenderPriceRepository senderPriceRepository;
	
	public Long findByCourierid(Long courierid){
		SenderPrice senderPrice = senderPriceRepository.findByCourierid(courierid);
		Long vehicleid = senderPrice.getVehicleid();
		return vehicleid;
	}
	
	public Optional<SenderPrice> findById(Long id){
		Optional<SenderPrice> senderPrice = senderPriceRepository.findById(id);
		return senderPrice;
	}
}
