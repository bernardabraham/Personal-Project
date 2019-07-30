package service;


import javax.inject.Inject;
import javax.security.auth.login.AccountNotFoundException;

import persistence.repository.TaskRepository;



public class TaskServiceImpl implements TaskService {

	@Inject
	private TaskRepository repo;
	
	public String getTask(int projectId) {
		return this.repo.getTask(projectId);
	}

	public String getAllTasks() {
		return this.repo.getAllTasks();
	}

	public String createTask(String account, int projectId) {
		return this.repo.createTask(account, projectId);
	}

	public String deleteTask(String taskContent) throws AccountNotFoundException {
		return this.repo.deleteTask(taskContent);
	}



}
