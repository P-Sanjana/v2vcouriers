package com.v2vCouriers.myapp.jwtauthentication.model;


import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.NaturalId;


@Entity
@Table(name = "courier")
@DynamicUpdate
public class Courier {

	
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
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "courier_vehicles", 
    	joinColumns = @JoinColumn(name = "courier_id"), 
    	inverseJoinColumns = @JoinColumn(name = "vehicle_id"))
    private Set<Vehicle> vehicle;

    @Column
    private Long extraPoints;

	public Courier() {
		
	}
      
    
	public Courier(String sendername,String email, String phnumber,String senderaddress, String sendercity, String senderdistrict, String senderstate,
			String sendercountry, boolean agree,  String contacttype, String repname, String repphnumber, String repaddress,  String repcity,
			String repdistrict, String repstate, String repcountry, String courierservice, Date pickupdate,String status, String wt, String vol, 
			String price, boolean redeemPoints) {
		super();
		this.sendername = sendername;
		this.email = email;
		this.phnumber = phnumber;
		this.senderaddress = senderaddress;
		this.sendercity = sendercity;
		this.senderdistrict = senderdistrict;
		this.senderstate = senderstate;
		this.sendercountry = sendercountry;
		this.agree = agree;
		this.contacttype = contacttype;
		this.repname = repname;
		this.repphnumber = repphnumber;
		this.repaddress = repaddress;
		this.repcity = repcity;
		this.repdistrict = repdistrict;
		this.repstate = repstate;
		this.repcountry = repcountry;
		this.courierservice = courierservice;
		this.pickupdate = pickupdate;
		this.status = status;
		this.wt = wt;
		this.vol = vol;
		this.price = price;
		this.redeemPoints = redeemPoints;
	}

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

	public String getSendercity() {
		return sendercity;
	}

	public void setSendercity(String sendercity) {
		this.sendercity = sendercity;
	}
	

	public String getSenderdistrict() {
		return senderdistrict;
	}


	public void setSenderdistrict(String senderdistrict) {
		this.senderdistrict = senderdistrict;
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

	public void setRepname(String repname) {
		this.repname = repname;
	}
	
	public String getRepname() {
		return repname;
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


	public Set<Vehicle> getVehicle() {
		return vehicle;
	}


	public void setVehicle(Set<Vehicle> vehicle) {
		this.vehicle = vehicle;
	}


	public boolean isRedeemPoints() {
		return redeemPoints;
	}


	public void setRedeemPoints(boolean redeemPoints) {
		this.redeemPoints = redeemPoints;
	}


	public Long getExtraPoints() {
		return extraPoints;
	}


	public void setExtraPoints(Long extraPoint) {
		this.extraPoints = extraPoint;
	}

	
	
	

    
}
