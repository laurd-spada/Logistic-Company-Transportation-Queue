package com.example.assessment.service.implementation;

import com.example.assessment.model.Customer;
import com.example.assessment.repository.CustomerRepository;
import com.example.assessment.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomerServiceImplementation implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public Customer createCustomer(Customer customer) {
        Customer createdCustomer = Customer.builder()
                .customerId(customer.getCustomerId())
                .customerName(customer.getCustomerName())
                .dropOffLocation(customer.getDropOffLocation())
                .pickUpLocation(customer.getPickUpLocation())
                .build();

        return customerRepository.save(createdCustomer);
    }

    @Override
    public List<Customer> getAllCustomers() {

        return customerRepository.findAll();
    }
}
