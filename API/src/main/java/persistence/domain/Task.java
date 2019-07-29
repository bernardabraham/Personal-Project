package persistence.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int taskId;

	@OneToMany(mappedBy = "projectId")
	@Column(name = "project_id")
	private Project project;

	private String taskContent;

	private boolean completed;

	public Task(int taskId, Project project, String taskContent, boolean completed) {
		super();
		this.taskId = taskId;
		this.project = project;
		this.taskContent = taskContent;
		this.completed = completed;
	}

	public Task() {
		super();
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getTaskContent() {
		return taskContent;
	}

	public void setTaskContent(String taskContent) {
		this.taskContent = taskContent;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

}
