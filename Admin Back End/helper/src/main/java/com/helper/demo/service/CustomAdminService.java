package com.helper.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@org.springframework.stereotype.Service
public class CustomAdminService implements UserDetailsService{

	@Autowired
	private Service service;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		
		if(userName.equals(this.service.authAdminUname(userName))) {
			return new User(userName, this.service.getAdminPass(userName), new ArrayList<>());
		}
		else
		{
			throw new UsernameNotFoundException("user not found");
		}
	}
	

}
