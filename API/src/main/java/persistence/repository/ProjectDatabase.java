package persistence.repository;

import javax.enterprise.inject.Default;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;


import persistence.domain.Project;
import persistence.domain.User;
import util.JSONUtil;

@Default
public class ProjectDatabase implements ProjectRepository {
	JSONUtil util = new JSONUtil();
	
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	
	@Transactional(value = TxType.SUPPORTS)
	public String getAllProjects() {
		TypedQuery<Project> query = manager.createQuery("select a from ProjectAccount a", Project.class);
		return this.util.getJSONForObject(query.getResultList());
	}
	
	@Transactional(value = TxType.SUPPORTS)
	public String getProject(int projectId) {
		TypedQuery<Project> query = manager.createQuery("select b from User b where b.projectId = '" + projectId + "'", Project.class);
		return this.util.getJSONForObject(query.getSingleResult());
	}

	@Transactional(value = TxType.REQUIRED)
	public String createProject(String jsonStr, int userId) {
		User u = manager.find(User.class, userId);
		Project account1 = util.getObjectForJSON(jsonStr,  Project.class);
		account1.setUser(u);
		manager.persist(account1);
		return "Success";

	}

	@Transactional(value = TxType.REQUIRED)
	public String deleteProject(int id) {
		this.manager.remove(this.manager.find(Project.class, id));
		return "Success";
	}

	@Transactional(value = TxType.REQUIRED)
	public String updateProject(int id, String project) {
		Project newAccount = util.getObjectForJSON(project, Project.class);
		Project existing = this.manager.find(Project.class, id);
		existing.setProjectName(newAccount.getProjectName());
		manager.persist(existing);
		return "Success";
	}

}
