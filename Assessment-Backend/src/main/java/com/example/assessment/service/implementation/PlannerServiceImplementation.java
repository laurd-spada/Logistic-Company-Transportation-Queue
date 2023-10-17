package com.example.assessment.service.implementation;

import com.example.assessment.model.Planner;
import com.example.assessment.repository.PlannerRepository;
import com.example.assessment.service.PlannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlannerServiceImplementation implements PlannerService {
    private final PlannerRepository plannerRepository;
    @Override
    public List<Planner> getAllPlanner() {
        return plannerRepository.findAll();
    }

    @Override
    public Optional<Planner> getPlannerByDate(LocalDate date) {
        return plannerRepository.findByDate(date);
    }

    @Override
    public Planner savePlanner(Planner planner) {
        return plannerRepository.save(planner);
    }

    @Override
    public List<Planner> getPlannerByDateRange(LocalDate startDate, LocalDate endDate) {
        return plannerRepository.findByDateBetween(startDate, endDate);
    }
}
