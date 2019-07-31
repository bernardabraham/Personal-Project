package persistence.repository;

public interface ProjectRepository{
	
	String getAllProjects();
	String getProject(int userId);
	String createProject(String project, int userId);
	String deleteProject(int id);
	String updateProject(int id, String project);

}