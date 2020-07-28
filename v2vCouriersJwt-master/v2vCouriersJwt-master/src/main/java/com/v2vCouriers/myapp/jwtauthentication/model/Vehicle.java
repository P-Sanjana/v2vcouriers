package com.v2vCouriers.myapp.jwtauthentication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;
@Entity
@Table(name = "vehicles")
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@NaturalId
	@Column(length = 60)
	private VehicleName name;
	
	@Column(length = 20)
	private Long vehicle_price;
	
	public Vehicle() {}

	public Vehicle(VehicleName name, Long vehicle_price) {
		super();
		this.name = name;
		this.vehicle_price = vehicle_price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public VehicleName getName() {
		return name;
	}

	public void setName(VehicleName name) {
		this.name = name;
	}

	public Long getVehicle_price() {
		return vehicle_price;
	}

	public void setVehicle_price(Long vehicle_price) {
		this.vehicle_price = vehicle_price;
	}
	
	
	
}
