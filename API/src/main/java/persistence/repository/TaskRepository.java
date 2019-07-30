package persistence.repository;

public interface TaskRepository{
	
	String getTask(int projectId);
	String getAllTasks();
	String createTask(String task, int projectId);
	String deleteTask(String taskContent);

}
