package com.helper.demo.controller;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helper.demo.model.Customer;
import com.helper.demo.model.HelperDetails;
import com.helper.demo.service.Service;

@RestController
@CrossOrigin
public class UserController {
	
//	private static final Logger log=LogManager.getLogger(UserController.class);
	
	@Autowired
	private Service service;
	
	
@GetMapping("/home")
public String home(){
	return "this is home";
}

///////////////////////helper section//////////////////////

@GetMapping("/helpers")
public List<HelperDetails> getAllHelper(){
	return this.service.getAllHelper();
}

@PutMapping("/helpers")
public HelperDetails updateHelper(@RequestBody HelperDetails helper){
	System.out.println(helper);
//	helper.getCustomer().setUserid(helper.getTempid());
	return this.service.updateHelper(helper);
}

@DeleteMapping("/helpers/{hid}")
public String removeHelper(@PathVariable int hid){
	return this.service.removeHelper(hid);              
}

///////////////////////Customer section//////////////////////


@GetMapping("/customers")
public List<Customer> getAllCustomers(){
	return this.service.getAllCustomers();
}

@PutMapping("/customers")
public Customer updateCustomer(@RequestBody Customer customer){
	return this.service.updateCustomer(customer);
}


@DeleteMapping("/customers/{cid}")
public String removeCustomer(@PathVariable int cid){
	System.out.println("my id is : "+cid);
	return this.service.removeCustomer(cid);              
}


///////////////////////////////////////////////////////////////////////

}
