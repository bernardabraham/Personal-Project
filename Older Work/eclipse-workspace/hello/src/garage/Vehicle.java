package garage;

public class Vehicle {

	private int noOfWheels;
	private int year;
	private int noOfPassengers;
	private String colour;

	public void setNoOfWheels(int noOfWheels) {
		this.noOfWheels = noOfWheels;
		// System.out.println("name");
	}

	public int getNoofWheels() {
		return NoOfWheels;

	}

	public void setnoOfPassengers(int nnoOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}

	public int getnoOfPassengers() {
		return noOfPassengers;
	}

	public void setyear(int year) {
		this.year = year;
	}

	public int getNyear() {
		return year;
	}

	public void setcolour(String colour) {
		this.colour = colour;
	}

	public int getcolour() {
		return colour;
	}

}

// 1. Using Vehicle as a base class, create three derived classes
// (car, motorcycle etc.), each derived class should have its own attributes
// in addition to the normal Vehicle attributes.

// 2. Using a List implementation, store all your vehicles in a Garage class.

// 3. Create a method in Garage that iterates through each Vehicle,
// calculating a bill for each type of Vehicle in a different way,
// depending on the type of vehicle it is. You can decide how this bill
// is calculated based on any attributes you see fit.
// (You do not get extra marks for making the calculation overly complex)

// 4. Garage should have methods that add Vehicle, remove Vehicle(s)
// (By ID, By Vehicle Type) fix Vehicle (Calculate bill) and empty the garage.
