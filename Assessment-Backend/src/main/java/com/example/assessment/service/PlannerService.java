package com.example.assessment.service;

import com.example.assessment.model.Planner;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PlannerService {
    List<Planner> getAllPlanner();
    Optional<Planner> getPlannerByDate(LocalDate date);
    Planner savePlanner(Planner planner);
    List<Planner> getPlannerByDateRange(LocalDate startDate, LocalDate endDate);
}
