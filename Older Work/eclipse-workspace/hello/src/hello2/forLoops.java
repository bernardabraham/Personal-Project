package hello2;

public class forLoops {
	public static void main(String[] args) {
		
	}
	int nums[] = { 1, 2, 3, 4, 5 };
	for (int i : nums) {
	for (int j = 0; j < nums.length; ++j) {
	if (nums[j] == i)
	System.out.println("i :" + i + " j :" + nums[j] 
	+ " i and j are the same");
	}
	}
}



