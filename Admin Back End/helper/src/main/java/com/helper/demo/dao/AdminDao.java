package com.helper.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helper.demo.model.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer>{

}
