package com.v2vCouriers.myapp.jwtauthentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.v2vCouriers.myapp.jwtauthentication.model.Vehicle;
import com.v2vCouriers.myapp.jwtauthentication.model.VehicleName;
import com.v2vCouriers.myapp.jwtauthentication.security.services.VehicleDetailsService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class VehicleRestAPI {

	@Autowired
	VehicleDetailsService vehicleDetailsService;
	
	//Sample request
	//http://localhost:8080/v2vcouriers/vehiclenamebyid/{id}
	@RequestMapping("/vehiclenamebyid/{id}")
	public VehicleName getVehicleNameById(@PathVariable Long id) throws Exception {
		Vehicle vehicle = vehicleDetailsService.findById(id);
		VehicleName Name = vehicle.getName();
		return Name;
	}
	
	//Sample request
	//http://localhost:8080/v2vcouriers/vehiclebyid/{id}
	@RequestMapping("/vehiclebyid/{id}")
	public Vehicle getVehicleById(@PathVariable Long id) throws Exception {
		Vehicle vehicle = vehicleDetailsService.findById(id);
		return vehicle;
	}
}