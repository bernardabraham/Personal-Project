package qa.com.TddLibrary2;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;

public class LibTest {

	private Library lib;
//	new Book("Harry Potter", "J.K Rowling", 223, 3.99, false);
//	new Book("Lord Of The Rings", "J.R Tolkien",1241, 19.99, true);
	Item moby = new Book("Moby Dick", "Herman Melville", 378, 9.99, true, 0);
	Item gatsby = new Book("The Great Gatsby", "F.Scott Fitzgerald", 144, 2.50, true);

	@Before
	public void init() {
		this.lib = new Library();
	}

	@Test
	public void testCheckOut() {
		assertEquals(false, lib.checkOut(moby));
	}
	@Test
	public void testCheckIn() {
		assertEquals(true, lib.checkIn(gatsby));
	}
	@Test
	public void testAddItem() {
		assertTrue(this.lib.addItem(new Book("Harry Potter", "J.K Rowling", 223, 3.99, false)));
	}
	@Test
	public void testRemoveItem() {
		this.lib.addItem(new Book("Harry Potter", "J.K Rowling", 223, 3.99, false));
		assertTrue(this.lib.removeItem(new Book("Harry Potter", "J.K Rowling", 223, 3.99, false)));
	}

	@Test
	public void testUpdateItem() {
		this.lib.addItem(moby);
		assertEquals("Update failed" , 0.99,  this.lib.updateItem(1, 0.99), 0.1);
	}
	@Test
	public void testRegisterPerson() {
		assertTrue(this.lib.registerPerson(new Person("Steve", "123 Bloop St", 55)));
	}
	@Test
	public void testDeletePerson() {
		this.lib.registerPerson(new Person("Steve", "123 Bloop St", 55));
		assertTrue(this.lib.deletePerson(new Person("Steve", "123 Bloop St", 55)));
	}
//	@Test
//	public void test8() {
		//assertEquals("something", lib.updatePerson("Steve"));
	}
