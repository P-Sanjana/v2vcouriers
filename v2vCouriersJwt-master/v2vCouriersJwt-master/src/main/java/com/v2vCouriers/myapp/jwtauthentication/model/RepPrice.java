package com.v2vCouriers.myapp.jwtauthentication.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "vehicle_rep")
public class RepPrice{

	@Id
	private Long courierid = 0L;
	
	@Column
	private Long priceid = 0L;
	
	@Column
	private Long vehicleid = 0L;
	
	@Column
	private String price = "0";

	public RepPrice() {}
	
	public RepPrice(Long courierid, Long priceid, String price) {
		super();
		this.courierid = courierid;
		this.priceid = priceid;
		this.price = price;
	}

	public Long getCourier_id() {
		return courierid;
	}

	public void setCourierid(Long courierid) {
		this.courierid = courierid;
	}

	public Long getPriceid() {
		return priceid;
	}

	public void setPriceid(Long priceid) {
		this.priceid = priceid;
	}


	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Long getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(Long vehicleid) {
		this.vehicleid = vehicleid;
	}
	
	
	
	
}
