package com.helper.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.helper.demo.dao.AdminDao;
import com.helper.demo.dao.CustomerDao;
import com.helper.demo.dao.HelperDetailsDao;
import com.helper.demo.model.Admin;
import com.helper.demo.model.Customer;
import com.helper.demo.model.HelperDetails;
import com.helper.demo.service.Service;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service{

	@Autowired
	private HelperDetailsDao hd;
	@Autowired
	private CustomerDao ctd;
	@Autowired
	private AdminDao ad;
	
	
	///////////////////helper section///////////////////////////
	
	@Override
	public List<HelperDetails> getAllHelper() {
		return hd.findAll();
	}
	
	@Override
	public HelperDetails updateHelper(HelperDetails helper) {
		return hd.save(helper);
	}

	@Override
	public String removeHelper(int hid) {
		hd.deleteById(hid);
		return "Helper Deleted Successfully";
	}

	
	////////////Customer section/////////////////
	

	@Override
	public List<Customer> getAllCustomers() {
		return ctd.findAll();
	}
	
	

	@Override
	public Customer updateCustomer(Customer customer) {
		return ctd.save(customer);	
	}
	
	@Override
	public String removeCustomer(int id) {
		
		List<HelperDetails> helperDetails=hd.findAll();
		
		for (HelperDetails helper : helperDetails) {
			if(helper.getCustomer().getUserid()==id) {
				hd.deleteById(helper.getHelperId());
				break;
			}
		}
		ctd.deleteById(id);
		return "customer deleted successfully";
	}

	

	///////////////////////admin service///////////////////
	
	@Override
	public String authAdminUname(String uname) {
		List<Admin> list=ad.findAll();
		for (Admin admin : list) {
			if(admin.getAdminUname().equals(uname))
				return admin.getAdminUname();
		}
		return null;
	}


	@Override
	public String getAdminPass(String userName) {
		List<Admin> list=ad.findAll();
		for (Admin admin : list) {
			if(admin.getAdminUname().equals(userName))
				return admin.getAdminPassword();
		}
		return null;
	}

	////end////
}
