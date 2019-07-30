package persistence.repository;

public interface UserRepository{
	
	String getAccount(String username);
	String getAllAccounts();
	String createAccount(String account);
	String deleteAccount(int id);
	String updateAccount(int id, String account);
	

}
