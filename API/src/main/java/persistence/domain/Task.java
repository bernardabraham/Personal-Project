package persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int taskId;
	
	@ManyToOne
	private Project project;
	
	private String taskContent;
	private boolean checked;
	;

	
	public Task(int taskId, Project project, String content, boolean checked) {
		super();
		this.taskId = taskId;
		this.project = project;
		this.taskContent = content;
		this.checked = checked;
		
	}
public Task(){
		
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
	public String getContent() {
		return taskContent;
	}
	public void setContent(String content) {
		this.taskContent = content;
	}

	public String getTaskContent() {
		return taskContent;
	}

	public void setTaskContent(String taskContent) {
		this.taskContent = taskContent;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	

}
