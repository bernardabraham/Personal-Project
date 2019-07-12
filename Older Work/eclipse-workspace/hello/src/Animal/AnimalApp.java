package Animal;

public class AnimalApp {
	public static void main(String[] args) {
		
		Cage<Dog> cage = new Cage<>();
		
		cage.setCagedAnimal(new Dog());
		
		System.out.println(cage.getCagedAnimal());
	}

}
