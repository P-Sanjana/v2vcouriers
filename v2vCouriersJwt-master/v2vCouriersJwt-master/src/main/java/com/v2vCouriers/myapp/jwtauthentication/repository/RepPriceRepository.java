package com.v2vCouriers.myapp.jwtauthentication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.v2vCouriers.myapp.jwtauthentication.model.RepPrice;

public interface RepPriceRepository extends JpaRepository<RepPrice, Long> {

	RepPrice findByCourierid(Long courierid);
	Optional<RepPrice> findById(Long courierid);

}
