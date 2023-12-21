package com.brenogodoy.desafiobrickupback.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.brenogodoy.desafiobrickupback.controller.type.TaskBody;
import com.brenogodoy.desafiobrickupback.entity.Task;
import com.brenogodoy.desafiobrickupback.repository.TaskRepository;

@Service
public class TaskService {
  private TaskRepository taskRepository;

  private final String FOLDER_PATH="/home/breno/brickup/Desafio-Brickup/desafio-brickup-back/myFiles/";

  public TaskService(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  public List<Task> create(TaskBody task, MultipartFile file) {
    String filePath=FOLDER_PATH+file.getOriginalFilename();

    taskRepository.save(Task.builder()
      .description(task.getDescription())
      .status(task.getStatus())
      .imagePath(filePath).build());

    try {
      file.transferTo(new File(filePath));
    } catch (IllegalStateException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }

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
