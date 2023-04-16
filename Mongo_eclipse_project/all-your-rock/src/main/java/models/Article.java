package com.example.models;

public class Article {

	private String id;
	private String title;
	private String author;
	private String content;
	private byte[] photo;
	
	public Article() {
		
	}
	
	public Article(String title, String author, String content) {
		this.title = title;
		this.author = author;
		this.content = content;
	}
	
	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}	
	
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	
	
}
