package com.v2vCouriers.myapp.jwtauthentication.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.RepPrice;
import com.v2vCouriers.myapp.jwtauthentication.repository.RepPriceRepository;

@Service
public class RepPriceDetailsService {

	@Autowired
	RepPriceRepository repPriceRepository;
	
	public Long findByCourierid(Long courierid){
		RepPrice repPrice = repPriceRepository.findByCourierid(courierid);
		Long vehicleid = repPrice.getVehicleid();
		return vehicleid;
	}
}
