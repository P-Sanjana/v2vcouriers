package com.v2vCouriers.myapp.jwtauthentication.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.v2vCouriers.myapp.jwtauthentication.model.Courier;

public interface CourierRepository extends JpaRepository<Courier, Long> {

	Optional<Courier> findById(Long id);
	Optional<Courier> findByEmail(String email);
	List<Courier> findByStatus(String status);
	Boolean existsByStatus(String status);
	List<Courier> findByVehicle_Id(Long id);
	List<Courier> findAll();

}
