package all_your_rock.models;

public class Comment {

	private String username;
	private String date;
	private String commentBody;
	
	public Comment(String username, String date, String commentBody){
		this.setUsername(username);
		this.setDate(date);
		this.setCommentBody(commentBody);
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCommentBody() {
		return commentBody;
	}

	public void setCommentBody(String commentBody) {
		this.commentBody = commentBody;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
}
