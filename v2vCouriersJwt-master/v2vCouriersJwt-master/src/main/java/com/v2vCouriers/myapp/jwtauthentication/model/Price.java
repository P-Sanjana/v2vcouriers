package com.v2vCouriers.myapp.jwtauthentication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;



@Entity
@Table(name = "price")
public class Price {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String district;
    
    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String city;
    
    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String country;
    
    @NotBlank
    @Column
    private String price;
    
    public Price() {}

	public Price(String district, String city,String country, String price) {
		super();
		this.district = district;
		this.city = city;
		this.country = country;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	} 
	
	
    
 
}
