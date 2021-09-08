package com.helper.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.helper.demo.model.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer>{

}
