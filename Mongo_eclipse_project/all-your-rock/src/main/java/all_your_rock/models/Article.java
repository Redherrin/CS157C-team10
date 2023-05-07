package all_your_rock.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "articles")
public class Article {
	
	@Id
	private String id;
	
	private String title;
	private String subtitle;
	private String author;
	private String body;
	private String date;
	private String lastUpdatedDate;
	private List<Chunk<?>> chunks;
	
	public String getId() {return id;}
	public void setId(String id) {this.id = id;}

	public String getTitle() {return title;}
	public void setTitle(String title) {this.title = title;}	
	
	public String getSubtitle() {return subtitle;}
	public void setSubtitle(String subtitle) {this.subtitle = subtitle;}	
	
	public String getAuthor() {return author;}
	public void setAuthor(String author) {this.author = author;}
	
	public String getBody() {return body;}
	public void setBody(String body) {this.body = body;}
	
	public String getDate() {return date;}
	public void setDate(String date) {this.date = date;}
	
	public String getLastUpdatedDate() {return lastUpdatedDate;}
	public void setLastUpdatedDate(String lastUpdatedDate) {this.lastUpdatedDate = lastUpdatedDate;}
	
	public List<Chunk<?>> getChunks() {
		return chunks;
	}
	public void setChunks(List<Chunk<?>> chunks) {
		this.chunks = chunks;
	}
	@Override
	public String toString() {
		return "Article [id=" + id + ", title=" + title + ", subtitle=" + subtitle + ", author=" + author + ", body="
				+ body + ", date=" + date + ", lastUpdatedDate=" + lastUpdatedDate + ", chunks=" + chunks + "]";
	}
	

	
	
	
}
