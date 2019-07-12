package Animal;

import java.util.ArrayList;
import java.util.List;

public class Cage<T extends Animal> {

			private T cagedAnimal;

			public T getCagedAnimal() {
				return cagedAnimal;
			}

			public void setCagedAnimal(T t) {
				this.cagedAnimal = t;
			}
			
	
}


