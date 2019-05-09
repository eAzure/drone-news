package com.example.demo;

public class Video {
	private Integer VideoID;
    private String VideoTitle;
    private String VideoContent;
    private String titleImage;
    private Integer ReadCount;
    private String CreatTime;
    private Integer CollectCount;
    private String CollectImage;
    private String ViewImage;
    private String Link;
    private String AuthorImage;
    private String VideoSrc;
    //在这里一定要注意这里的构造函数的顺序一定要和数据库里的顺序是一样的，否则会报出“Cannot determine value type from string”这样的数据库SQL错误
    public Video(Integer VideoID,String CreatTime,String VideoTitle,String VideoSrc,String VideoContent,Integer ReadCount,Integer CollectCount,String AuthorImage,String ViewImage,String CollectImage,String Link,String titleImage) {
        this.VideoID = VideoID;
        this.CreatTime=CreatTime;
        this.VideoTitle=VideoTitle;
        this.VideoSrc=VideoSrc;
        this.VideoContent=VideoContent;
        this.ReadCount=ReadCount;
        this.CollectCount=CollectCount;
        this.AuthorImage=AuthorImage;
        this.ViewImage=ViewImage;
        this.CollectImage=CollectImage;
        this.Link=Link;
        this.titleImage=titleImage;
    }
 
    public Integer getVideoId() {
        return VideoID;
    }
 
    public void setVideoId(Integer VideoId) {
        this.VideoID = VideoID;
    }
 
    public String getVideoTitle() {
        return VideoTitle;
    }
 
    public void setVideoTitle(String videoTitle) {
        this.VideoTitle = VideoTitle;
    }
 
    public String getVideoContent() {
    	return VideoContent;
    }
    
    public void setVideoContent(String videoContent) {
    	this.VideoContent=VideoContent;
    }
 
    public String gettitleImage() {
    	return titleImage;
    }
    
    public void settitleImage(String titleImage) {
    	this.titleImage=titleImage;
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
    
    public String getVideoSrc() {
    	return VideoSrc;
    }
    
    public void setVideoSrc(String VideoSrc) {
    	this.VideoSrc=VideoSrc;
    }
    @Override
    public String toString() {
        return "Video{"+
        		"VideoID="+VideoID+
        		", CreatTime='" + CreatTime + '\'' +
        		", VideoTitle='" + VideoTitle + '\'' +
        		", VideoSrc='" + VideoSrc + '\'' +
        		", VideoContent='" + VideoContent + '\'' +
        		", ReadCount='" + ReadCount + '\'' +
        		", CollectCount='" + CollectCount + '\'' +
        		", AuthorImage='" + AuthorImage + '\'' +
        		", ViewImage='" + ViewImage + '\'' +
        		", CollectImage='" + CollectImage + '\'' +
        		", Link='" + Link + '\'' +
        		", titleImage=" + titleImage +
                '}';
    }
}
