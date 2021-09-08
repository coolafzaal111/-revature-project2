package com.helper.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
	@Id
	private int adminId;
	 private String adminName;
	 private String adminUname;
	 private String adminPassword;
}
