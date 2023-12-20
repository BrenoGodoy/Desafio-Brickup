package com.brenogodoy.desafiobrickupback.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brenogodoy.desafiobrickupback.entity.Task;
import com.brenogodoy.desafiobrickupback.repository.TaskRepository;

@Service
public class TaskService {
  private TaskRepository taskRepository;

  public TaskService(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  public List<Task> create(Task task) {
    taskRepository.save(task);
    return list();
  }

  public List<Task> list() {
    // Sort sort = Sort.by(...properties:"id").descending().and(
    //   Sort.by(...properties:"description").ascending());
    return taskRepository.findAll();
  }

  public List<Task> update(Task task) {
    if (task.getId() != null && taskRepository.existsById(task.getId())) {
      taskRepository.save(task);
    };

    return list();
  }

  public List<Task> delete(Long id) {
    taskRepository.deleteById(id);;
    
    return list();
  }

}
