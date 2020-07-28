package com.v2vCouriers.myapp.jwtauthentication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.v2vCouriers.myapp.jwtauthentication.model.Vehicle;
import com.v2vCouriers.myapp.jwtauthentication.model.VehicleName;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long>{
	Optional<Vehicle> findByName(VehicleName vehicleTrain);
	Optional<Vehicle> findById(Long id);
}
