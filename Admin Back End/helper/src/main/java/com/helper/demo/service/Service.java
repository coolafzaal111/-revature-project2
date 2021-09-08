package com.helper.demo.service;

import java.util.List;
import com.helper.demo.model.Customer;
import com.helper.demo.model.HelperDetails;


public interface Service {

	////helper section////
	public List<HelperDetails> getAllHelper();
	public HelperDetails updateHelper(HelperDetails helper);
	public String removeHelper(int hid);
	
	////admin section////
	public String authAdminUname (String uname);
	public String getAdminPass(String userName);

	////customer section////
	public List<Customer> getAllCustomers();
	public Customer updateCustomer(Customer customer);
	public String removeCustomer(int id);



	

}
