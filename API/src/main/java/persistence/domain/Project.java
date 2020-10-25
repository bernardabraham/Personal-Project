package persistence.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int projectId;
	
//	@Column(name = "user_id")
	@ManyToOne//(mappedBy = "userId")
	private User user;
	private String projectName;

	
public Project(int projectId, User user, String projectName) {
		super();
		this.projectId = projectId;
		this.user = user;
		this.projectName = projectName;
	}


public int getProjectId() {
	return projectId;
}


public void setProjectId(int projectId) {
	this.projectId = projectId;
}


public User getUser() {
	return user;
}


public void setUser(User user) {
	this.user = user;
}


public String getProjectName() {
	return projectName;
}


public void setProjectName(String projectName) {
	this.projectName = projectName;
}
	
	

}
