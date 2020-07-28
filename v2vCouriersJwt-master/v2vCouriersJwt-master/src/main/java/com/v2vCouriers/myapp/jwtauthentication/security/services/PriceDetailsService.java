package com.v2vCouriers.myapp.jwtauthentication.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.Price;
import com.v2vCouriers.myapp.jwtauthentication.repository.PriceRepository;

@Service
public class PriceDetailsService {

	@Autowired
    private PriceRepository priceRepository;

	public Price findByDistrict(String district){
		return priceRepository.findByDistrict(district);
	}
	
	public List<Price> findByCity(String city){
		return priceRepository.findByCity(city);
	}
	
	public Price findByCityAndDistrict(String city, String district) {
		return priceRepository.findByCityAndDistrict(city, district);
	}
	
}
