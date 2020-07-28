package com.v2vCouriers.myapp.jwtauthentication.security.services;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import com.v2vCouriers.myapp.jwtauthentication.model.CourierData;

@Service
@ConfigurationProperties(prefix="endpoint")
public class JsonServerDetailsService {

	private String url;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public CourierData getPostById(@PathVariable Long id) throws Exception {

	    final String uri = url + Long.toString(id);
	    RestTemplate restTemplate = new RestTemplate();
		CourierData resp = restTemplate.getForObject(uri, CourierData.class);
		
		List<String> locations = resp.getLocations();
		
		int counter = resp.getCounter();
		
		if(counter < locations.size()) {
			resp.setCurrentLocation(locations.get(counter));
		}
	    
		
	    return resp;
	}
	
}
