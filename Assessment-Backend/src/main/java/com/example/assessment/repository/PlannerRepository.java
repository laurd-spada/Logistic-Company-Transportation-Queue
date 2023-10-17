package com.example.assessment.repository;

import com.example.assessment.model.Planner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PlannerRepository extends JpaRepository<Planner, Long> {
    Optional<Planner> findByDate(LocalDate date);

    List<Planner> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
