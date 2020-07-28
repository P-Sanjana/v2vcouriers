package com.v2vCouriers.myapp.jwtauthentication.controller;

import java.io.IOException;
import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
   @RequestMapping(value = "/sendemail")
   public String sendEmail() throws AddressException, MessagingException, IOException {
	  sendmail();
      return "Email sent successfully";
   }   
   
   private void sendmail() throws AddressException, MessagingException, IOException {
	   Properties props = new Properties();
	   props.put("mail.smtp.auth", "true");
	   props.put("mail.smtp.starttls.enable", "true");
	   props.put("mail.smtp.host", "smtp.gmail.com");
	   props.put("mail.smtp.port", "587");
	   
	   Session session = Session.getInstance(props, new javax.mail.Authenticator() {
	      protected PasswordAuthentication getPasswordAuthentication() {
	         return new PasswordAuthentication("purnima1999.surya@gmail.com", "L1@mg_pu^n1@220775");
	      }
	   });
	   Message msg = new MimeMessage(session);
	   msg.setFrom(new InternetAddress("purnima1999.surya@gmail.com", false));

	   msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("purnima.cse_a2017@crescent.education"));
	   msg.setSubject("V2V Couriers Confirmation");
	   msg.setContent("Dear Customer,<br>Your courier details have been stored successfully!! Thank you for registering with V2V Couriers!</p>", "text/html");

	   MimeBodyPart messageBodyPart = new MimeBodyPart();
	   messageBodyPart.setContent("Dear Customer,<p>Your courier details have been stored successfully!! Thank you for registering with V2V Couriers!</p>", "text/html");

	   Multipart multipart = new MimeMultipart();
	   multipart.addBodyPart(messageBodyPart);
	   //MimeBodyPart attachPart = new MimeBodyPart();

	   /*attachPart.attachFile("/var/tmp/image19.png");
	   multipart.addBodyPart(attachPart);*/
	   msg.setContent(multipart);
	   Transport.send(msg);   
	}
}