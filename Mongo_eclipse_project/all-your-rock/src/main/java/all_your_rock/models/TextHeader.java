package all_your_rock.models;

public class TextHeader {

	private String body;
	private String header;
	private String type;
	
	public TextHeader() {
		this.type = "text";
	}
	
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getHeader() {
		return header;
	}
	public void setHeader(String header) {
		this.header = header;
	}
	public String getType() {
		return this.type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Text [body=" + body + ", header=" + header + "]";
	}
	
	
	
	
}
