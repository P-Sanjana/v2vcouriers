package com.v2vCouriers.myapp.jwtauthentication.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.v2vCouriers.myapp.jwtauthentication.model.Price;
import com.v2vCouriers.myapp.jwtauthentication.security.services.PriceDetailsService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class PriceRestAPIs {
	
	@Autowired
	PriceDetailsService priceDetailsService;
	
	//Sample request
	//http://localhost:8080/v2vcouriers/pricebycityanddistrict?city=Hyderabad&district=Nizamabad
	@RequestMapping("/pricebycityanddistrict")
	public Price getPriceByCityAndDistrict(@RequestParam("city")  String city, @RequestParam("district")  String district) throws Exception {
		return priceDetailsService.findByCityAndDistrict(city, district);
	}

}
