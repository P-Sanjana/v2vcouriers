package com.v2vCouriers.myapp.jwtauthentication.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.Vehicle;
import com.v2vCouriers.myapp.jwtauthentication.repository.VehicleRepository;

@Service
public class VehicleDetailsService {

	@Autowired
	private VehicleRepository vehicleRepository;
	
	public Vehicle findById(Long id) throws Exception {
    	
        Vehicle vehicle = null;
		vehicle = vehicleRepository.findById(id).orElseThrow(
					() -> new Exception("Vehicle Not Found with -> id : " + id));
        return vehicle;
    }

}
