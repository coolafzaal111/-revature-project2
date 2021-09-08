package com.helper.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HelperDetails {
	@Id
	@GeneratedValue
    private int helperId;
    private String helperService;
    private String location;
    private String description;
	private String aadhar;
	

//	(cascade = { CascadeType.MERGE, CascadeType.PERSIST }
	@OneToOne//121 Customers
	private Customer customer;
    
}
