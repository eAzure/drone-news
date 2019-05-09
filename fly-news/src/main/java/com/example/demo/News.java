package com.example.demo;
 
public class News {
    private Integer NewsID;
    private String NewsTitle;
    private String NewsContent;
    private String CoverImage;
    private Integer ReadCount;
    private String CreatTime;
    private String NewsConcreteContent;
    private Integer CollectCount;
    private String CollectImage;
    private String ViewImage;
    private String Link;
    private String AuthorImage;
 
    public News(Integer NewsID,String NewsTitle,String NewsContent,String CoverImage,Integer ReadCount,String CreatTime,String NewsConcreteContent,Integer CollectCount,String CollectImage,String ViewImage,String Link,String AuthorImage) {
        this.NewsID = NewsID;
        this.NewsTitle=NewsTitle;
        this.NewsContent=NewsContent;
        this.CoverImage=CoverImage;
        this.ReadCount=ReadCount;
        this.CreatTime=CreatTime;
        this.NewsConcreteContent=NewsConcreteContent;
        this.CollectCount=CollectCount;
        this.CollectImage=CollectImage;
        this.ViewImage=ViewImage;
        this.Link=Link;
        this.AuthorImage=AuthorImage;
    }
 
    public Integer getNewsId() {
        return NewsID;
    }
 
    public void setNewsId(Integer NewsId) {
        this.NewsID = NewsId;
    }
 
    public String getTitle() {
        return NewsTitle;
    }
 
    public void setTitle(String title) {
        this.NewsTitle = title;
    }
 
    public String getNewsContent() {
    	return NewsContent;
    }
    
    public void setNewsContent(String newsContent) {
    	this.NewsContent=newsContent;
    }
 
    public String getCoverImage() {
    	return CoverImage;
    }
    
    public void setCoverImage(String coverImage) {
    	this.CoverImage=coverImage;
    }
    
    public Integer getReadCount() {
    	return ReadCount;
    }
    
    public void setReadCount(Integer readCount) {
    	this.ReadCount=readCount;
    }
    
    public String getCreatTime() {
    	return CreatTime;
    }
    
    public void setCreatTime(String creatTime) {
    	this.CreatTime=creatTime;
    }
    
    public String getNewsConcreteContent() {
    	return NewsConcreteContent;
    }
    
    public void setNewsConcreteContent(String NewsConcreteContent) {
    	this.NewsConcreteContent=NewsConcreteContent;
    }
    
    public Integer getCollectCount() {
    	return CollectCount;
    }
    
    public void setCollectCount(Integer collectCount) {
    	this.CollectCount=collectCount;
    }
    
    public String getCollectImage() {
    	return CollectImage;
    }
    
    public void setCollectImage(String CollectImage) {
    	this.CollectImage=CollectImage;
    }
    
    public String getViewImage() {
    	return ViewImage;
    }
    
    public void setViewImage(String ViewImage) {
    	this.ViewImage=ViewImage;
    }
    
    public String getLink() {
    	return Link;
    }
    
    public void setLink(String Link) {
    	this.Link=Link;
    }
    
    public String getAuthorImage() {
    	return AuthorImage;
    }
    
    public void setAuthorImage(String AuthorImage) {
    	this.AuthorImage=AuthorImage;
    }
    @Override
    public String toString() {
        return "News{"+
        		"NewsID="+NewsID+
        		", NewsTitle='" + NewsTitle + '\'' +
        		", NewsContent='" + NewsContent + '\'' +
        		", CoverImage='" + CoverImage + '\'' +
        		", ReadCount='" + ReadCount + '\'' +
        		", CreatTime='" + CreatTime + '\'' +
        		", NewsConcreteContent='" + NewsConcreteContent + '\'' +
        		", CollectCount='" + CollectCount + '\'' +
        		", CollectImage='" + CollectImage + '\'' +
        		", ViewImage='" + ViewImage + '\'' +
        		", AuthorImage='" + AuthorImage + '\'' +
        		", Link=" + Link +
                '}';
    }
}