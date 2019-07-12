package hello2;

public class MathClass { // creates a new class

	public int addNumber(int a, int b) { // creates a method signature
		return a + b; // method body
	}

	public int multiplyNumber(int a, int b) { // creates a method signature
		return a * b;
	}

	public Double divideNumber(double a, double b) { // creates a method signature
		if (a > b) {
			return a / b;
		} else {
			System.out.println("the divission cannot be performed");
			return null;
		}
	}
}