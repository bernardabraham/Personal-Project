package qa.com.TddLibrary2;

public class Book extends Item implements FrontPage {

	private String title;
	private String author;

	public Book(String name, String author, int pages, double cost, boolean available, int id) {
		super(pages, cost, available, id);
		this.title = name;
		this.author = author;

	}

	public Book(String name, String author, int pages, double cost, boolean available) {
		super(pages, cost, available);
		this.title = name;
		this.author = author;

	}

	public String getName() {
		return title;
	}

	public void setName(String name) {
		this.title = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public void frontPage() {
		System.out.println("i am a book frontpage");
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}

}
