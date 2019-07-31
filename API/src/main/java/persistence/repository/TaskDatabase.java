package persistence.repository;

import javax.enterprise.inject.Default;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import persistence.domain.Project;
import persistence.domain.Task;
import util.JSONUtil;

@Default
public class TaskDatabase implements TaskRepository {
	JSONUtil util = new JSONUtil();
	
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Transactional(value = TxType.SUPPORTS)
	public String getTask(int projectId) {
		TypedQuery<Task> query = manager.createQuery("select b from Task b where b.project = '" + projectId + "'", Task.class);
		return this.util.getJSONForObject(query.getResultList());
	}	
	
	@Transactional(value = TxType.SUPPORTS)
	public String getAllTasks() {
		TypedQuery<Task> query = manager.createQuery("select a from Task a", Task.class);
		return this.util.getJSONForObject(query.getResultList());
	}

	@Transactional(value = TxType.REQUIRED)
	public String createTask(String jsonStr, int projectId) {
		Project u = manager.find(Project.class, projectId);
		Task task1 = util.getObjectForJSON(jsonStr, Task.class);
		task1.setProject(u);
		manager.persist(task1);
		return "{\"result\" : \"Success1\"}";

	}

	@Transactional(value = TxType.REQUIRED)
	public String deleteTask(String taskContent) {
		this.manager.remove(this.manager.find(Task.class, taskContent));
		return "{\"result\" : \"Username is taken\"}";
	}

	



}