package persistence.repository;

import javax.enterprise.inject.Default;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import persistence.domain.User;
import util.JSONUtil;

@Default
public class UserDatabase implements UserRepository {
	JSONUtil util = new JSONUtil();

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Transactional(value = TxType.SUPPORTS)
	public String getAccount(String username) {
		TypedQuery<User> query = manager.createQuery("select b from User b where b.username = '" + username + "'",
				User.class);
		return this.util.getJSONForObject(query.getSingleResult());
		
	}

	@Transactional(value = TxType.SUPPORTS)
	public String getAllAccounts() {
		TypedQuery<User> query = manager.createQuery("select a from ProjectAccount a", User.class);
		return this.util.getJSONForObject(query.getResultList());
	}

	@Transactional(value = TxType.REQUIRED)
	public String createAccount(String jsonStr) {
		User account1 = util.getObjectForJSON(jsonStr, User.class);
		TypedQuery<User> query = manager
				.createQuery("select b from User b where b.username = '" + account1.getUsername() + "'", User.class);
		if (query.getResultList().isEmpty()) {
			manager.persist(account1);
			return "{\"result\" : \"Success1\"}";
		} else {
			return "{\"result\" : \"Username is taken\"}";
		}

	}

	@Transactional(value = TxType.REQUIRED)
	public String deleteAccount(int id) {
		this.manager.remove(this.manager.find(User.class, id));
		return "{\"result\" : \"Success1\"}";
	}

	@Transactional(value = TxType.REQUIRED)
	public String updateAccount(int id, String account) {
		User newAccount = util.getObjectForJSON(account, User.class);
		User existing = this.manager.find(User.class, id);
		existing.setUsername(newAccount.getUsername());
		existing.setPassword(newAccount.getPassword());
		existing.setEmail(newAccount.getEmail());
		manager.persist(existing);
		return "{\"result\" : \"Success1\"}";
	}

}
