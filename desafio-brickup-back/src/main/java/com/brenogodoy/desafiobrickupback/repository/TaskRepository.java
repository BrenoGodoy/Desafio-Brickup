package com.brenogodoy.desafiobrickupback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brenogodoy.desafiobrickupback.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {}
