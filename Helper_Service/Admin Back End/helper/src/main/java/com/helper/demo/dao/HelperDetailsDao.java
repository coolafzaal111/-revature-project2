package com.helper.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.helper.demo.model.HelperDetails;

public interface HelperDetailsDao extends JpaRepository<HelperDetails, Integer>{

//	@Query("select * from HelperDetails where helperService = ?1")
//	List<HelperDetails> getHelperByService(String servicetype);
	
}
