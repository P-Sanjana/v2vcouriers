package com.v2vCouriers.myapp.jwtauthentication.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.v2vCouriers.myapp.jwtauthentication.model.Courier;
import com.v2vCouriers.myapp.jwtauthentication.repository.CourierRepository;

@Service
public class CourierDetailsService {

	 	@Autowired
	    private CourierRepository courierRepository;
	 	
	 	 public List<Courier> findAll() throws Exception{
		    	
		    	List<Courier>  courier = null;
		    	courier = courierRepository.findAll();
		    	return courier;
		        
		    }

	    public Courier findById(Long id) throws Exception {
	    	
	        Courier courier = null;
			courier = courierRepository.findById(id).orElseThrow(
						() -> new Exception("Courier Not Found with -> id : " + id));
	        return courier;
	    }
	    
	    public Courier findByEmail(String email) throws Exception {
	    	
	        Courier courier = null;
				courier = courierRepository.findByEmail(email).orElseThrow(
						() -> new Exception("Courier Not Found with -> email : " + email));
	        return courier;
	    }
	    
	    public List<Courier> findByStatus(String status) throws Exception{
	    	
	    	List<Courier>  courier = null;
	    	if(courierRepository.existsByStatus(status)){
	    		courier = courierRepository.findByStatus(status);
	    	}
	    	else {
				throw new Exception("Courier Not Found with -> status : " + status);
			}
	        return courier;
	        
	    }
	    

		public Courier updateStatusToYetToRecieve(Long id) {
			
			Courier courier = null;
			try {
				courier = courierRepository.findById(id).orElseThrow(
						() -> new Exception("Courier Not Found with -> id : " + id));
			} catch (Exception e) {
				e.printStackTrace();
			}
			courier.setStatus("Yet_to_receive");
			courierRepository.save(courier);
			return courier;
		}
		
		public Courier updateStatusToInProgress(Long id) {
			
			Courier courier = null;
			try {
				courier = courierRepository.findById(id).orElseThrow(
						() -> new Exception("Courier Not Found with -> id : " + id));
			} catch (Exception e) {
				e.printStackTrace();
			}
			courier.setStatus("In_progress");
			courierRepository.save(courier);
			return courier;
		}
		
		public Courier updateStatusToReadyToDeliver(Long id) {
			
			Courier courier = null;
			try {
				courier = courierRepository.findById(id).orElseThrow(
						() -> new Exception("Courier Not Found with -> id : " + id));
			} catch (Exception e) {
				e.printStackTrace();
			}
			courier.setStatus("Ready_to_deliver");
			courierRepository.save(courier);
			return courier;
		}
		
		public Courier updateStatusToDelivered(Long id) {
			
			Courier courier = null;
			try {
				courier = courierRepository.findById(id).orElseThrow(
						() -> new Exception("Courier Not Found with -> id : " + id));
			} catch (Exception e) {
				e.printStackTrace();
			}
			courier.setStatus("Delivered");
			courierRepository.save(courier);
			return courier;
		}

		public List<Courier> findByVehicle_Id(Long id) {
			List<Courier>  courier = null;
			
	    	courier = courierRepository.findByVehicle_Id(id);
	        return courier;
			
		}
		
		
		public Long findExtraPoints(Long id) throws Exception {
		    	
		     Courier courier = null;
		     courier = courierRepository.findById(id).orElseThrow(
							() -> new Exception("Courier Not Found with -> id : " + id));
		     return courier.getExtraPoints();
	    }		
		

}
