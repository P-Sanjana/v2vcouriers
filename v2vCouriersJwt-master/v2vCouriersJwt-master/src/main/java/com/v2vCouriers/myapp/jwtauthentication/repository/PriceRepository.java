package com.v2vCouriers.myapp.jwtauthentication.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.v2vCouriers.myapp.jwtauthentication.model.Price;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {

	Price findByDistrict(String district);
	List<Price> findByCity(String city);
	Price findByCityAndDistrict(String city, String district);
}
