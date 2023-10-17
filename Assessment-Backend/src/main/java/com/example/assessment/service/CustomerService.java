package com.example.assessment.service;

import com.example.assessment.model.Customer;

import java.util.List;

public interface CustomerService {
    Customer createCustomer(Customer customer);
    List<Customer> getAllCustomers();
}
