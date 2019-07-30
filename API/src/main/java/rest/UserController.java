package rest;

import javax.inject.Inject;
import javax.security.auth.login.AccountNotFoundException;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import service.UserService;

@Path("/account")
public class UserController {

	@Inject
	private UserService service;

	@GET
	@Path("/get/{username}")
	public String getAccount(@PathParam("username") String username) throws AccountNotFoundException {
		return this.service.getAccount(username);
	}

	@GET
	@Path("/getAll")
	public String getAllAccounts() {
		return this.service.getAllAccounts();
	}

	@POST
	@Path("/create")
	@Produces(MediaType.APPLICATION_JSON)
	public String createAccount(String account) {
		return this.service.createAccount(account);
	}

	@DELETE
	@Path("/delete/{id}")
	public String deleteAccount(@PathParam("id") int id) throws AccountNotFoundException {
		return this.service.deleteAccount(id);
	}

	@POST
	@Path("/update/{id}")
	public String updateAccount(@PathParam("id") int id, String account) throws AccountNotFoundException {
		return this.service.updateAccount(id, account);
	}
}