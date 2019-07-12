package iteration;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Iteration {

	public static void main(String[] args) {
		List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//		for (int i = 0; i < nums.size(); i++) {
//			System.out.println(nums.get(i));
//		}
//		for (int bloop : nums) {
//			if (bloop % 2 == 0) {
//				System.out.println(bloop);
//			}
//		}
//		nums.stream()
//				.filter(x -> x % 2 == 0)
//				.forEach(i -> System.out.println(i));
		int max = nums.stream()
						.filter(x -> x % 2 == 0)
						.map(i -> i * i)
						.reduce((a, b) -> Math.max(a, b))
						.get();
		System.out.println(max);
//						.collect(Collectors.toList());
//		System.out.println(nums);
	}
	
	
}
//public class Streams {

}
