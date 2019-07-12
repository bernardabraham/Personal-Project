package com.qa.Goldilocks;

import paintWizard.Paint;

public class GoldilocksApp {
	
	public static void main(String[] args) {
		
		
		WeightTemperature goldilocks = new WeightTemperature(50, 60);
		WeightTemperature chairPorridge = new WeightTemperature(70, 80);
		
		goldilocks.goldilocksMethod(chairPorridge);
			
		
	}

}
