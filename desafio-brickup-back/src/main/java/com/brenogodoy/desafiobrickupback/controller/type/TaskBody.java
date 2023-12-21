package com.brenogodoy.desafiobrickupback.controller.type;

import org.springframework.web.multipart.MultipartFile;

public class TaskBody {
    private String description;
    private String status;
    private MultipartFile imagePath;

    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      this.description = description;
    }
    public String getStatus() {
      return status;
    }
    public void setStatus(String status) {
      this.status = status;
    }
    public MultipartFile getImagePath() {
      return imagePath;
    }
    public void setImagePath(MultipartFile imagePath) {
      this.imagePath = imagePath;
    }
}
