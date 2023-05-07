package all_your_rock.models;

import java.util.Date;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "media")

public class Media {

	@Id
	private String id;
	private Binary data;
	private String contentType;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Binary getData() {
		return data;
	}
	public void setData(Binary data) {
		this.data = data;
	}
	public String getContentType() {
		return this.contentType;
	}
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
	
	@Override
	public String toString() {
		return "Media [id=" + id + ", data=" + data + "]";
	}
	
//	
}
