package rest;

import javax.inject.Inject;
import javax.security.auth.login.AccountNotFoundException;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;


import service.TaskService;

@Path("/task")
public class TaskController {

	@Inject
	private TaskService service;
	
	@GET
	@Path("/get/{projectId}")
	public String getTask(@PathParam("projectId") int projectId) throws AccountNotFoundException {
		return this.service.getTask(projectId);
	}

	@GET
	@Path("/getAll")
	public String getAllTasks() {
		return this.service.getAllTasks();
	}
	
	@POST
	@Path("/create/{projectId}")
	public String createTask(String account, @PathParam("projectId") int projectId) {
		return this.service.createTask(account, projectId);
	}
	@DELETE
	@Path("/delete/{id}")
	public String deleteTask(@PathParam("taskContent") String taskContent) throws AccountNotFoundException {
		return this.service.deleteTask(taskContent);
	}
	
}
