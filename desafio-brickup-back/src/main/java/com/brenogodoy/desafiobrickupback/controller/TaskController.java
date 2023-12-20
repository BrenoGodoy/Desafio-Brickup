package com.brenogodoy.desafiobrickupback.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brenogodoy.desafiobrickupback.entity.Task;
import com.brenogodoy.desafiobrickupback.service.TaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000/")
public class TaskController {
  private TaskService taskService;


  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }
  
  @PostMapping
  List<Task> create(@RequestBody Task task) {
    return taskService.create(task);
  }

  @GetMapping
  List<Task> list() {
    return taskService.list();
  }

  @PutMapping
  List<Task> update(@RequestBody Task task) {
    return taskService.update(task);
  }

  @DeleteMapping("{id}")
  List<Task> delete(@PathVariable Long id) {
    return taskService.delete(id);
  }

}
