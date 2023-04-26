package all_your_rock.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "articles")
public class Article {
	
	@Id
	private String id;
	
	private String title;
	private String author;
	private String body;
	private String date;
	
	public String getId() {return id;}
	public void setId(String id) {this.id = id;}

	public String getTitle() {return title;}
	public void setTitle(String title) {this.title = title;}	
	
	public String getAuthor() {return author;}
	public void setAuthor(String author) {this.author = author;}
	
	public String getBody() {return body;}
	public void setBody(String body) {this.body = body;}
	
	public String getDate() {return date;}
	public void setDate(String date) {this.date = date;}
	
}
