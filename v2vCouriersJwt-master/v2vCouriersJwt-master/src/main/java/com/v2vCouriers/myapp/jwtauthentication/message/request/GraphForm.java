package com.v2vCouriers.myapp.jwtauthentication.message.request;

public class GraphForm {

    private Long id;
	
	
    private String price;
    
    
    private String month;
    
    
    public GraphForm() {}

	public GraphForm(String price, String month) {
		super();
		this.price = price;
		this.month = month;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
}
