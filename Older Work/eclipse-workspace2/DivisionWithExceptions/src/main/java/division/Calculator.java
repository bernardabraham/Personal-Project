package division;

public class Calculator {
	public int division(Integer numerator, Integer denominator) {
		int output = 0;
		try {
			output = numerator / denominator;
			System.out.println(output);
		} catch (ArithmeticException ae) {
			return 0;
			
		} catch (NullPointerException npe) {
			return 1;
		} catch (Exception e) {
			return 2;
		}
		return output;
	}
	
}

