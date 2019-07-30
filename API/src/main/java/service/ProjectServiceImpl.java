package service;


import javax.inject.Inject;
import javax.security.auth.login.AccountNotFoundException;

import persistence.repository.ProjectRepository;


public class ProjectServiceImpl implements ProjectService {

	@Inject
	private ProjectRepository repo;

	public String getAllProjects() {
		return this.repo.getAllProjects();
	}
	
	public String getProject(int projectId) {
		return this.repo.getProject(projectId);
	}

	public String createProject(String project, int userId) {
		return this.repo.createProject(project, userId);
	}

	public String deleteProject(int Id) throws AccountNotFoundException {
		return this.repo.deleteProject(Id);
	}

	public String updateProject(int Id, String project) throws AccountNotFoundException {
		return this.repo.updateProject(Id, project);
	}

}
