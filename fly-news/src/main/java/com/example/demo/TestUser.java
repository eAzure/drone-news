package com.example.demo;
 
public class TestUser {
    private Integer id;
    private String name;
    private String job;
 
    public TestUser(Integer id, String name, String job) {
        this.id = id;
        this.name = name;
        this.job = job;
    }
 
    public Integer getId() {
        return id;
    }
 
    public void setId(Integer id) {
        this.id = id;
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public String getJob() {
        return job;
    }
 
    public void setJob(String job) {
        this.job = job;
    }
 
    @Override
    public String toString() {
        return "TestUser{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", job=" + job +
                '}';
    }
}