package person;

public class Person {

	private int age;
	private String name;
	private String job;

	public Person() {
		super();
	}

	public Person(int age, String name, String job) {
		super();
		this.age = age;
		this.name = name;
		this.job = job;
	}

	public void setName(String name) {
		// this.job = job;
		// System.out.println("name");
		this.name = name;
	}

	public void setAge(int age) {
		if (age > 0 && age < 130) {
			this.age = age;
		}
		// this.age.add(age);
		// System.out.println("age");
	}

	public void setJob(String job) {
		this.job = job;
		// System.out.println("job");
	}

	public String getName() {
		return this.name;
	}

	public int getAge() {
		return this.age;
	}

	public String getJob() {
		return this.job;
	}

	@Override
	public String toString() {
		return "Name: : " + this.name + " Age: " + this.age + " Job: " + this.job;
	}

	// public void nameCall(String job, String name, int age) {
	// return job, name, age
	//
	// }

	// // creates an array of people
	// private List<Person> people = new ArrayList<>();

	// public void addPerson(Person person) {
	// this.people.add(person);
	// }

}
// 1. Create a Person class that models the following:
// a. Name
// b. Age
// c. Job Title
// 2. Create a method to return all three of these in a formatted string.
// HINT: Override the ToString() method.
// 3. Create some example objects with this class.
// 4. Create a List Implementation and store those object inside.
// 5. Use a stream to output all of your people to the console.
// 6. Create a method that can search for a specific Person by their name.
