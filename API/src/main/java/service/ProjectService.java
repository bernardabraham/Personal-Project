package service;

import javax.security.auth.login.AccountNotFoundException;


public interface ProjectService {
	String getAllProjects();
	
	String getProject(int projectId);

	String createProject(String project, int userId);

	String deleteProject(int projectId) throws AccountNotFoundException;

	String updateProject(int projectId, String project) throws AccountNotFoundException;


}
