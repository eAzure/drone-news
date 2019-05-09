package com.example.demo;

public class NewsComment {
	private Integer CommentID;
	private Integer NewsID;
	private String NewsComment;
	private String AuthorID;
	private String CommentDate;
	
	public NewsComment(Integer CommentID,Integer NewsID,String NewsComment,String AuthorID,String CommentDate) {
		this.CommentID=CommentID;
		this.NewsID=NewsID;
		this.NewsComment=NewsComment;
		this.AuthorID=AuthorID;
		this.CommentDate=CommentDate;
	}
	
	public void setNewsID(Integer NewsID) {
		this.NewsID=NewsID;
	}
	
	public Integer getNewsID() {
		return this.NewsID;
	}
	
	public void setNewsComment(String NewsComment) {
		this.NewsComment=NewsComment;
	}
	
	public String getNewsComment() {
		return this.NewsComment;
	}
	
	public void setAuthorID(String AuthorID) {
		this.AuthorID=AuthorID;
	}
	
	public String getAuthorID() {
		return this.AuthorID;
	}
	
	public void setCommentDate(String CommentDate) {
		this.CommentDate=CommentDate;
	}
	
	public String getCommentDate() {
		return this.CommentDate;
	}
	
	public void setCommentID(Integer CommentID) {
		this.CommentID=CommentID;
	}
	
	public Integer getCommentID() {
		return this.CommentID;
	}
	@Override
	public String toString() {
		return "NewsComment{"+
        		"CommentID="+CommentID+
        		", NewsID='" + NewsID + '\'' +
        		", NewsComment='" + NewsComment + '\'' +
        		", AuthorID='" + AuthorID + '\'' +
        		", CommentDate=" + CommentDate +
                '}';
	}
}
