package com.v2vCouriers.myapp.jwtauthentication.controller;





import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.Random;
import java.util.Set;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.v2vCouriers.myapp.jwtauthentication.message.request.CourierForm;
import com.v2vCouriers.myapp.jwtauthentication.message.response.ResponseMessage;
import com.v2vCouriers.myapp.jwtauthentication.model.Courier;
import com.v2vCouriers.myapp.jwtauthentication.model.Price;
import com.v2vCouriers.myapp.jwtauthentication.model.RepPrice;
import com.v2vCouriers.myapp.jwtauthentication.model.SenderPrice;
import com.v2vCouriers.myapp.jwtauthentication.model.User;
import com.v2vCouriers.myapp.jwtauthentication.model.Vehicle;
import com.v2vCouriers.myapp.jwtauthentication.model.VehicleName;
import com.v2vCouriers.myapp.jwtauthentication.repository.CourierRepository;
import com.v2vCouriers.myapp.jwtauthentication.repository.RepPriceRepository;
import com.v2vCouriers.myapp.jwtauthentication.repository.SenderPriceRepository;
import com.v2vCouriers.myapp.jwtauthentication.repository.UserRepository;
import com.v2vCouriers.myapp.jwtauthentication.repository.VehicleRepository;
import com.v2vCouriers.myapp.jwtauthentication.security.services.CourierDetailsService;
import com.v2vCouriers.myapp.jwtauthentication.security.services.PriceDetailsService;
import com.v2vCouriers.myapp.jwtauthentication.security.services.RepPriceDetailsService;
import com.v2vCouriers.myapp.jwtauthentication.security.services.SenderPriceDetailsService;





@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v2vcouriers")
public class CourierRestAPIs {

	@Autowired
	CourierRepository courierRepository;
	
	@Autowired
	private CourierDetailsService courierDetailsService;
	
	@Autowired
	VehicleRepository vehicleRepository;
	
	@Autowired
	private PriceDetailsService priceDetailsService;
	
	@Autowired
	private SenderPriceDetailsService senderPriceDetailsService;
	
	@Autowired
	private RepPriceDetailsService repPriceDetailsService;
	
	@Autowired
	SenderPriceRepository senderPriceRepository;
	
	@Autowired
	RepPriceRepository repPriceRepository;
	
	@Autowired
	UserRepository userRepository;

	
	//http://localhost:8080/v2vcouriers/newcourier
	@PostMapping("/newcourier")
	public ResponseEntity<?> saveCourier (@Valid @RequestBody CourierForm courierRequest) throws Exception {

		// Saving the new Courier Details
		Courier courier = new Courier(courierRequest.getSendername(), courierRequest.getEmail(), courierRequest.getPhnumber(), 
				courierRequest.getSenderaddress(), courierRequest.getSendercity(), courierRequest.getSenderdistrict(), courierRequest.getSenderstate(),
				courierRequest.getSendercountry(), courierRequest.isAgree(), courierRequest.getContacttype(), courierRequest.getRepname(), 
				courierRequest.getRepphnumber(), courierRequest.getRepaddress(), courierRequest.getRepcity(), courierRequest.getRepdistrict(),
				courierRequest.getRepstate(), courierRequest.getRepcountry(), courierRequest.getCourierservice(), courierRequest.getPickupdate(), 
				courierRequest.getStatus(), courierRequest.getWt(), courierRequest.getVol(), courierRequest.getPrice(), courierRequest.isRedeemPoints());
		
		Vehicle strVehicle;
		Set<Vehicle> vehicle = new HashSet<>();
		
		switch (courierRequest.getCourierservice().toLowerCase()) {
			case "standard":
				strVehicle = vehicleRepository.findByName(VehicleName.VEHICLE_TRUCK)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Courier Vehicle not found."));
				vehicle.add(strVehicle);

				break;
			case "pallet":
				strVehicle = vehicleRepository.findByName(VehicleName.VEHICLE_TRUCK)
				.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Courier Vehicle not found."));
				vehicle.add(strVehicle);

				break;
			case "same-day":
				strVehicle = vehicleRepository.findByName(VehicleName.VEHICLE_TRAIN)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Courier Vehicle not found."));
				vehicle.add(strVehicle);

				break;
			case "overnight":
				strVehicle = vehicleRepository.findByName(VehicleName.VEHICLE_AIRPLANE)
				.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Courier Vehicle not found."));
				vehicle.add(strVehicle);

				break;
			case "international":
				strVehicle = vehicleRepository.findByName(VehicleName.VEHICLE_AIRPLANE)
				.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Courier Vehicle not found."));
				vehicle.add(strVehicle);
		}
		
		courier.setVehicle(vehicle);

		courierRepository.save(courier);
		
		savePrice(courier);
		sendmail(courier);
		return new ResponseEntity<>(new ResponseMessage("Courier registered successfully!"), HttpStatus.OK);
		
	}
	
	@GetMapping("/newPrice")
 	public ResponseEntity<?> savePrice(Courier courier) throws Exception {
 		Long id1 = null;
 		String price1 = null;
 		Long id2 = null;
 		String price11 = null;
 		Long id = courier.getId();


 		String sendercity = new String(courier.getSendercity());
 		String senderdistrict = new String(courier.getSenderdistrict());
 		int c_price = Integer.parseInt(courier.getPrice());
 		
 		Set<Vehicle> vehicle = courier.getVehicle();
 		Long vehicle_id = null;
 		
 		for (Vehicle temp : vehicle) {
 	        vehicle_id = temp.getId();
 	     }

 		List<Price> price = priceDetailsService.findByCity(sendercity);
 		for(Price p : price) {
 			String a = p.getDistrict();
 			if(a.equals(senderdistrict)) {
 				id1 = p.getId();

 				price1 = p.getPrice();
 			}
 		}

 		String repcity = new String(courier.getRepcity());
 		String repdistrict = new String(courier.getRepdistrict());

 		List<Price> price2 = priceDetailsService.findByCity(repcity);
 		for(Price p : price2) {
 			String a = p.getDistrict();
 			if(a.equals(repdistrict)) {
 				id2 = p.getId();

 				price11 = p.getPrice();
 			}
 		}

 		SenderPrice senderPrice = new SenderPrice(id, id1, price1);
 		senderPrice.setVehicleid(vehicle_id);
 		senderPriceRepository.save(senderPrice);

 		RepPrice repPrice = new RepPrice(id, id2, price11);
 		repPrice.setVehicleid(vehicle_id);
 		repPriceRepository.save(repPrice);

 		String tot_price = Integer.toString(Integer.parseInt(price1) + Integer.parseInt(price11) + c_price);
 		
 		
 		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username = null;
		
		
		if (principal instanceof UserDetails) {
		  username = ((UserDetails)principal).getUsername();
		} 
		
		User user = userRepository.findByUsername(username);
		Long points = user.getPoints();
		Long extraPoints = 0L;
		
		double rand1 = Math.random();
		if(rand1 > 0.2) {
			String courierService = courier.getCourierservice().toLowerCase();
			Random random = new Random();
			switch (courierService) {
			
				case "standard": 	
								extraPoints = (long) random.nextInt((20 - 0) + 1);
								break;
				case "pallet":		
								extraPoints = (long) random.nextInt((20 - 0) + 1);
								break;
				case "same-day":	
								extraPoints = (long) ((random.nextInt((30 - 10) + 1)) + 10);
								break;
				case "overnight":	
								extraPoints = (long) ((random.nextInt((30 - 10) + 1)) + 10);
								break;
				case "international":
								extraPoints = (long) ((random.nextInt((50 - 30) + 1)) +  30);
			}
				
		}
		
		System.out.println(extraPoints);
		boolean redeemPoints = courier.isRedeemPoints();
		
		if(redeemPoints) {
			tot_price = Long.toString(Long.parseLong(tot_price) - (points * 2));
			points = points - points;
		}
		
		points = points + extraPoints;
		user.setPoints(points);
		
		courier.setExtraPoints(extraPoints);
 		courier.setPrice(tot_price);
 		courierRepository.save(courier);
 		
 		userRepository.save(user);
 		return new ResponseEntity<>(new ResponseMessage("Courier price updated successfully!"), HttpStatus.OK);	

 	}
	
	private void sendmail(Courier courier) throws Exception {
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		   
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
		     protected PasswordAuthentication getPasswordAuthentication() {
		    	 return new PasswordAuthentication("v2vcouriers@gmail.com", "v2v@1234");
		     }
		});
		
		Long id = courier.getId();
		String idString = Long.toString(id);
		
		String Customer = courier.getSendername();
		String s_email = courier.getEmail();
		String s_no = courier.getPhnumber();
		String s_add = courier.getSenderaddress();
		String s_city = courier.getSendercity();
		String s_dis = courier.getSenderdistrict();
		String s_state = courier.getSenderstate();
		String s_country = courier.getSendercountry(); 
		String contact = courier.getContacttype(); 
		String r_name = courier.getRepname();
		String r_no = courier.getRepphnumber();
		String r_add = courier.getRepaddress(); 
		String r_city = courier.getRepcity(); 
		String r_dis = courier.getRepdistrict();
		String r_state = courier.getRepstate();
		String r_country = courier.getRepcountry(); 
		String cs = courier.getCourierservice(); 
		Date date = courier.getPickupdate();
		String status = courier.getStatus(); 
		String wt = courier.getWt();
		String vol = courier.getVol();
		String price = courier.getPrice();
		Long extraPoints = courier.getExtraPoints();
		
		Long vehicle_id = getRepVehicleIdByCourierId(id);
		String vehicle_idString = Long.toString(vehicle_id);
		
		String Content = "<br> ID : " + idString + "<br> SENDER'S NAME : " + Customer + "<br> SENDER'S EMAIL : " + s_email + "<br> SENDER'S PHONE NO. : " + s_no
				+ "<br> SENDER'S ADDRESS : " + s_add + "<br> SENDER'S DISTRICT : " + s_dis + "<br> SENDER'S CITY : "
				+ s_city + "<br> SENDER'S STATE : " + s_state + "<br> SENDER'S COUNTRY : " + s_country + "<br> CONTACT TYPE : "
				+ contact + "<br> RECIPIENT NAME : " + r_name + "<br> RECIPIENT PHONE N0. : " + r_no + "<br> RECIPIENT ADDRESS : " + r_add
				+ "<br> RECIPIENT CITY : " + r_city + "<br> RECIPIENT DISTRICT : " + r_dis + "<br> RECIPIENT STATE : " + r_state + "<br> RECIPIENT COUNTRY : "
				+ r_country + "<br> COURIER SERVICE : " + cs + "<br> PICKUP DATE : " + date + "<br> STATUS : "
				+ status + "<br> WT : " + wt + "<br> VOL : " + vol + "<br> PRICE : " + price + "<br> VEHICLE ID : " + vehicle_idString;
		
		if(extraPoints > 0) {
			Content = Content + "<br><br><br><p><b>Congratulations, You've earned " + Long.toString(extraPoints) + " Points for this courier!!</b></p>";
		}
				
		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("v2vcouriers@gmail.com", false));

		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(s_email));
		msg.setSubject("V2V Couriers Confirmation");
		
		//+ 

		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent("Dear " + Customer + " ,<p>Your courier details have been stored successfully!! The details are as follows : <br>" + Content + "</p><p>Thank you for registering with V2V Couriers!</p>", "text/html");
		
		
		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);
		
		msg.setContent(multipart);
		Transport.send(msg);   
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/couriers
	@RequestMapping("/couriers")
	public List<Courier> getCourierById() throws Exception {
		return courierDetailsService.findAll();
	}


	//Sample request
	//http://localhost:8080/v2vcouriers/courierbyid/{id}
	@RequestMapping("/courierbyid/{id}")
	public Courier getCourierById(@PathVariable Long id) throws Exception {
		return courierDetailsService.findById(id);
	}
	
	//Sample request
	//http://localhost:8080/v2vcouriers/extrapoints/{id}
	@RequestMapping("/extrapoints/{id}")
	public Long getExtraPoints(@PathVariable Long id) throws Exception {
		return courierDetailsService.findExtraPoints(id);
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/courierbyemail?email=abc@gmail.com
	@RequestMapping("/courierbyemail")
	public Courier getCourierByEmail(@RequestParam("email")  String email) throws Exception {
		return courierDetailsService.findByEmail(email);
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/couriersbyytastatus
	@RequestMapping("/couriersbyytastatus")
	public List<Courier> getCourierByYtaStatus() throws Exception {
		return courierDetailsService.findByStatus("Yet_to_accept");
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/couriersbyytrstatus
	@RequestMapping("/couriersbyytrstatus")
	public List<Courier> getCourierByYtrStatus() throws Exception {
		return courierDetailsService.findByStatus("Yet_to_receive");
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/couriersbyinstatus
	@RequestMapping("/couriersbyinstatus")
	public List<Courier> getCourierByInStatus() throws Exception {
		return courierDetailsService.findByStatus("In_progress");
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/couriersbyrtdstatus
	@RequestMapping("/couriersbyrtdstatus")
	public List<Courier> getCourierByRtdStatus() throws Exception {
		return courierDetailsService.findByStatus("Ready_to_deliver");
	}
	
	//Sample request
	//http://localhost:8080/v2vcouriers/updateytastatus
	@RequestMapping("/updateytastatus/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Courier updateYetToAcceptStatus (@PathVariable Long id) {

		// Updating the Courier Status
		return courierDetailsService.updateStatusToYetToRecieve(id);
		
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/updateytastatus
	@RequestMapping("/updateytrstatus/{id}")
	@PreAuthorize("hasRole('COURIERBOY')")
	public Courier updateYetToReceiveStatus (@PathVariable Long id) {

		// Updating the Courier Status
		return courierDetailsService.updateStatusToInProgress(id);
			
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/updateinstatus
	@RequestMapping("/updateipstatus/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Courier updateInProgressStatus (@PathVariable Long id) {

		// Updating the Courier Status
		return courierDetailsService.updateStatusToReadyToDeliver(id);
	}
	
	
	//Sample request
	//http://localhost:8080/v2vcouriers/updatertdstatus
	@RequestMapping("/updatertdstatus/{id}")
	@PreAuthorize("hasRole('COURIERBOY')")
	public Courier updateReadyToDeliverStatus (@PathVariable Long id) {

		// Updating the Courier Status
		return courierDetailsService.updateStatusToDelivered(id);
			
	}
	
	//Sample request
	//http://localhost:8080/v2vcouriers/courierbyvehicle/{id}
	@RequestMapping("/courierbyvehicle/{id}")
	public List<Courier> getCourierByVehicle(@PathVariable Long id) throws Exception {
		return courierDetailsService.findByVehicle_Id(id);
	}
	
	@GetMapping("/sendervehicleidbycourierid/{id}")
	public Long getSenderVehicleIdByCourierId(@PathVariable Long id) throws Exception {
		return senderPriceDetailsService.findByCourierid(id);
	}
	
	@GetMapping("/repvehicleidbycourierid/{id}")
	public Long getRepVehicleIdByCourierId(@PathVariable Long id) throws Exception {
		return repPriceDetailsService.findByCourierid(id);
	}
	
	@RequestMapping("/senderbyid/{id}")
	public Optional<SenderPrice> getSenderPriceById(@PathVariable Long id) throws Exception {
		return senderPriceDetailsService.findById(id);
	}
	
	
}
