package service;

import javax.security.auth.login.AccountNotFoundException;


public interface TaskService {
	
	String getTask(int projectId);
	
	String getAllTasks();

	String createTask(String account, int projectId);

	String deleteTask(String taskContent) throws AccountNotFoundException;



}