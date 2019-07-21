package service;

import javax.security.auth.login.AccountNotFoundException;


public interface TaskService {
	String getAllAccounts();

	String createAccount(String account);

	String deleteAccount(int accountId) throws AccountNotFoundException;

	String updateAccount(int accountId, String account) throws AccountNotFoundException;


}