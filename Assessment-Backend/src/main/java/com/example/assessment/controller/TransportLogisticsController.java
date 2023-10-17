package com.example.assessment.controller;

import com.example.assessment.model.Customer;
import com.example.assessment.model.Planner;
import com.example.assessment.service.CustomerService;
import com.example.assessment.service.PlannerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/transport-logistics/")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class TransportLogisticsController {
    private final PlannerService plannerService;
    private final CustomerService customerService;
    @PostMapping("customer")
    public ResponseEntity<Customer> createCustomer (@RequestBody Customer customer) {
        Customer created = customerService.createCustomer(customer);
        return ResponseEntity.ok(created);
    }
    @GetMapping("customers")
    public ResponseEntity<List<Customer>> getAllCustomers () {

        List<Customer> listOfCustomers = customerService.getAllCustomers();
        return ResponseEntity.ok(listOfCustomers);
    }
    @GetMapping("planners")
    public ResponseEntity<Planner> getPlannerByDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        Optional<Planner> planner = plannerService.getPlannerByDate(date);
        return planner.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("create-planner")
    public ResponseEntity<Planner> createPlanner (@RequestBody Planner planner) {
        Planner createdPlanner = plannerService.savePlanner(planner);
        return new ResponseEntity<>(createdPlanner, HttpStatus.CREATED);
    }
    @GetMapping("planners-range")
    public ResponseEntity<List<Planner>> getPlannerBy7DaysRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate
    ){
        List<Planner> planner = plannerService.getPlannerByDateRange(startDate, endDate);
        return new ResponseEntity<>(planner, HttpStatus.OK);
    }
}