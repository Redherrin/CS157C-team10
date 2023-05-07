package all_your_rock.models;

import java.util.Date;

public class MediaHeader {

	private String filename;
	private String caption;
	private String source;
	private Date uploadDate;
	private String fileId;
	private String contentType;
	private String type;
	
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public Date getUploadDate() {
		return uploadDate;
	}
	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
	public String getContentType() {
		return this.contentType;
	}
	public String getType() {
		return this.type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
