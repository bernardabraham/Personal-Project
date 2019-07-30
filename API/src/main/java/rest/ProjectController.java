package rest;

import javax.inject.Inject;
import javax.security.auth.login.AccountNotFoundException;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;


import service.ProjectService;

@Path("/project")
public class ProjectController {

	@Inject
	private ProjectService service;

	@GET
	@Path("/getAll")
	public String getAllProjects() {
		return this.service.getAllProjects();
	}
	
	@GET
	@Path("/get/{projectId}")
	public String getProject(@PathParam("projectId") int projectId) throws AccountNotFoundException {
		return this.service.getProject(projectId);
	}
	
	
	@POST
	@Path("/create/{userId}")
	public String createProject(String project, @PathParam("userId")  int userId) {
		return this.service.createProject(project, userId);
	}
	@DELETE
	@Path("/delete/{id}")
	public String deleteProject(@PathParam("id") int id) throws AccountNotFoundException {
		return this.service.deleteProject(id);
	}
	@POST
	@Path("/update/{id}")
	public String updateProject(@PathParam("id") int id, String project) throws AccountNotFoundException {
		return this.service.updateProject(id, project);
	}
}
