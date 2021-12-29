package com.example.demo.Plants;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantsRepository extends JpaRepository<Plants,Long> {
    List<Plants> findAllByNameContainingIgnoreCase(String name);
    List<Plants> findAllByClimate_NameContainingIgnoreCase(String name);
    List<Plants> findAllBySeasons_NameContainingIgnoreCase(String name);


}
