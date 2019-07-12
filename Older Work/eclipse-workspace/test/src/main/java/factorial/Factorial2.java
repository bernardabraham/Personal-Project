package factorial;

public class Factorial2 {

	public int factorialBA(int input) {
		int update = 0;
		for (int i = 2; input % i == 0; i++) {

			int check = input % i;
			if (check == 0) {
				update = input / i;
			}
			if (update == 1) {
				return i;
			}

			else {
				return 0;
			}

		}
		return update;
	}

}
