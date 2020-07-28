package com.v2vCouriers.myapp.jwtauthentication.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

public class CourierData {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String sendername;
    
    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    @Column
    private String email;
    
    @NotBlank
    @Size(min=10, max = 11)
    @Column
    private String phnumber;
    
    @NotBlank
    @Size(min=3, max = 90)
    @Column
    private String senderaddress;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String senderdistrict;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String sendercity;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String senderstate;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String sendercountry;
    
    @Column
    private boolean agree;

    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String contacttype;
    
    @NotNull
    @Size(min=3, max = 50)
    @Column
    private String repname;
    

    @NotBlank
    @Size(min=10, max = 11)
    @Column
    private String repphnumber;
    
    @NotBlank
    @Size(min=3, max = 90)
    @Column
    private String repaddress;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String repcity;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String repdistrict;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String repstate;
    
    @NotBlank
    @Size(min=3, max = 30)
    @Column
    private String repcountry;
     
    @NotBlank
    @Size(min=3, max = 50)
    @Column
    private String courierservice;
    
    @Temporal(TemporalType.DATE)
    @Column
    private Date pickupdate;
    
    @NotBlank
    @Size(min=3, max = 90)
    @Column
    private String status;
    
    @NotBlank
    @Column
    private String wt;
    
    @NotBlank
    @Column
    private String vol;
    
    @Column
    private String price;
    
    @Column
    private boolean redeemPoints;
    
    @Column
    private String vehicleid;
    
    @Column
    private int counter = 0;
    
    @Column
    private List<String> locations;
    
    @Column
    private String currentLocation;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSendername() {
		return sendername;
	}

	public void setSendername(String sendername) {
		this.sendername = sendername;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhnumber() {
		return phnumber;
	}

	public void setPhnumber(String phnumber) {
		this.phnumber = phnumber;
	}

	public String getSenderaddress() {
		return senderaddress;
	}

	public void setSenderaddress(String senderaddress) {
		this.senderaddress = senderaddress;
	}

	public String getSenderdistrict() {
		return senderdistrict;
	}

	public void setSenderdistrict(String senderdistrict) {
		this.senderdistrict = senderdistrict;
	}

	public String getSendercity() {
		return sendercity;
	}

	public void setSendercity(String sendercity) {
		this.sendercity = sendercity;
	}

	public String getSenderstate() {
		return senderstate;
	}

	public void setSenderstate(String senderstate) {
		this.senderstate = senderstate;
	}

	public String getSendercountry() {
		return sendercountry;
	}

	public void setSendercountry(String sendercountry) {
		this.sendercountry = sendercountry;
	}

	public boolean isAgree() {
		return agree;
	}

	public void setAgree(boolean agree) {
		this.agree = agree;
	}

	public String getContacttype() {
		return contacttype;
	}

	public void setContacttype(String contacttype) {
		this.contacttype = contacttype;
	}

	public String getRepname() {
		return repname;
	}

	public void setRepname(String repname) {
		this.repname = repname;
	}

	public String getRepphnumber() {
		return repphnumber;
	}

	public void setRepphnumber(String repphnumber) {
		this.repphnumber = repphnumber;
	}

	public String getRepaddress() {
		return repaddress;
	}

	public void setRepaddress(String repaddress) {
		this.repaddress = repaddress;
	}

	public String getRepcity() {
		return repcity;
	}

	public void setRepcity(String repcity) {
		this.repcity = repcity;
	}

	public String getRepdistrict() {
		return repdistrict;
	}

	public void setRepdistrict(String repdistrict) {
		this.repdistrict = repdistrict;
	}

	public String getRepstate() {
		return repstate;
	}

	public void setRepstate(String repstate) {
		this.repstate = repstate;
	}

	public String getRepcountry() {
		return repcountry;
	}

	public void setRepcountry(String repcountry) {
		this.repcountry = repcountry;
	}

	public String getCourierservice() {
		return courierservice;
	}

	public void setCourierservice(String courierservice) {
		this.courierservice = courierservice;
	}

	public Date getPickupdate() {
		return pickupdate;
	}

	public void setPickupdate(Date pickupdate) {
		this.pickupdate = pickupdate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getWt() {
		return wt;
	}

	public void setWt(String wt) {
		this.wt = wt;
	}

	public String getVol() {
		return vol;
	}

	public void setVol(String vol) {
		this.vol = vol;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public boolean isRedeemPoints() {
		return redeemPoints;
	}

	public void setRedeemPoints(boolean redeemPoints) {
		this.redeemPoints = redeemPoints;
	}

	public String getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(String vehicleid) {
		this.vehicleid = vehicleid;
	}

	public String getCurrentLocation() {
		return currentLocation;
	}

	public void setCurrentLocation(String currentLocation) {
		this.currentLocation = currentLocation;
	}

	public List<String> getLocations() {
		return locations;
	}

	public void setLocations(List<String> locations) {
		this.locations = locations;
	}

	public int getCounter() {
		return counter;
	}

	public void setCounter(int counter) {
		this.counter = counter;
	}
    
	
    
}
