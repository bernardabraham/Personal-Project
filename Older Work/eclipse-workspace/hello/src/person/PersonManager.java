package person;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class PersonManager {
	// creates an array of people
	private List<Person> people = new ArrayList<>();

	public PersonManager() {
		super();
	}

	// prints out each element of the list
	public void listAll() {
		this.people.stream().forEach(i -> System.out.println(i));
	}

	public List<Person> findByName(String name) {
		// input = Scanner();
		// Scanner scanner = new Scanner(System.in);
		return this.people.stream().filter(p -> p.getName() == name).collect(Collectors.toList());

	}

	public boolean addPerson(Person person) {
		return this.people.add(person);
	}

	public boolean removePerson(Person person) {
		return this.people.remove(person);
	}
}
