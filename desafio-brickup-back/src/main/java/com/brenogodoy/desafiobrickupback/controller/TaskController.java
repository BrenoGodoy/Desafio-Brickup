package com.brenogodoy.desafiobrickupback.controller;

import java.io.IOException;
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
import org.springframework.web.multipart.MultipartFile;

import com.brenogodoy.desafiobrickupback.controller.type.TaskBody;
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
  List<Task> create(TaskBody task) {
    MultipartFile file = task.getImagePath();
    return taskService.create(task, file);
  }

  @GetMapping
  List<Task> list() {
    return taskService.list();
  }

  @GetMapping("{id}")
  byte[] downloadImage(@PathVariable Long id) throws IOException {
   byte[] image = taskService.downloadImageFromSystem(id);

   return image;
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
