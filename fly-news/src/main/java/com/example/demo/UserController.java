package com.example.demo;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

@Controller

@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    
    
    @RequestMapping(value = "/findAll")
    @ResponseBody
    public List<User> findAll() {
        return userService.findAll();
    }
    
    
    @RequestMapping(value="/selectUser{id}", method = RequestMethod.GET)
    @ResponseBody
    public User selectUser(Integer id) {
    	System.out.println(id);
    	System.out.println(userService.selectUser(id));
        return userService.selectUser(id);
    }
    
    
    @RequestMapping(value = "add")
    @ResponseBody
    public int addUser(){
        User u = new User(99,"oooo",45);
        int stat = userService.addUser(u);
        return stat;
    }
    
    
    //@CrossOrigin(origins = {"http://127.0.0.1:5500/vue.html", "null"})
    @RequestMapping(value="/findAllNews")
    @ResponseBody
    public List<News> findAllNews(){
    	return userService.findAllNews();
    }
    
    //查询所有视频
    @RequestMapping(value="/findAllVideo")
    @ResponseBody
    public List<Video> findAllVideo(){
    	return userService.findAllVideo();
    }
    
    
    
    @RequestMapping(value="/testJson")
    @ResponseBody
    public List<TestUser> findTest() {
    	return userService.findTest();
    }
    
    @RequestMapping(value="/deleteNews{id}", method = RequestMethod.GET)
    @ResponseBody
    public int delNews(Integer id) {
    	return userService.deleteNews(id);
    }
    
    //用户上传新闻
    @RequestMapping(value="/addNews{NewsID,NewsTitle,NewsContent,CoverImage,ReadCount,CreatTime,NewsConcreteContent,CollectCount,CollectImage,ViewImage,Link,AuthorImage}",method=RequestMethod.POST)
    @ResponseBody
    public int addNews(Integer NewsID,String NewsTitle,String NewsContent,String CoverImage,Integer ReadCount,String CreatTime,String NewsConcreteContent,Integer CollectCount,String CollectImage,String ViewImage,String Link,String AuthorImage) {
    	News news=new News(NewsID,NewsTitle,NewsContent,CoverImage,ReadCount,CreatTime,NewsConcreteContent,CollectCount,CollectImage,ViewImage,Link,AuthorImage);
    	int status=userService.addNews(news);
    	return status;
    }
    
   //查询新闻数量
    @RequestMapping(value="/findNewsNum")
    @ResponseBody
    public int findNewsNum() {
    	return userService.findNewsNum();
    }
    
    //查询视频数量
    @RequestMapping(value="/findVideoNum")
    @ResponseBody
    public int findVideoNum() {
    	return userService.findVideoNum();
    }
    
    //点击喜欢按钮后更新喜欢值的操作
    @RequestMapping(value="/changeLikeCollect{NewsID}",method=RequestMethod.GET)
    @ResponseBody
    public int changeLikeCollect(Integer NewsID) {
    	return userService.updateLikeCount(NewsID);
    }
    
    //判断用户登录是否正确
    @RequestMapping(value="/judgeManager{manageUserID,ManagerUserNickname,passWord}",method=RequestMethod.GET)
    @ResponseBody
    public ManageUser judgeManager(Integer manageUserID,String ManagerUserNickname,String passWord) {
    	ManageUser manager=new ManageUser(manageUserID,ManagerUserNickname,passWord);
    	return userService.judgeManager(manager);
    }
    
    //注册管理者用户信息
    @RequestMapping(value="/registMessage{manageUserID,ManagerUserNickname,passWord}")
    @ResponseBody
    public int regist(Integer manageUserID,String ManagerUserNickname,String passWord) {
    	ManageUser manager=new ManageUser(manageUserID,ManagerUserNickname,passWord);
    	return userService.addManagerUser(manager);
    }
    
    //查询管理者数量
    @RequestMapping(value="/findManagerNum")
    @ResponseBody
    public int findMaNum() {
    	return userService.findManagerNum();
    }
    
    //管理者删除视频
    @RequestMapping(value="/deleteVideo{id}",method=RequestMethod.GET)
    @ResponseBody
    public int delVideo(Integer id) {
    	return userService.deleteVideo(id);
    }
    
    //用户上传视频的操作
    @RequestMapping(value="/addVideo{VideoID,CreatTime,VideoTitle,VideoSrc,VideoContent,ReadCount,CollectCount,AuthorImage,ViewImage,CollectImage,Link,titleImage}")
    @ResponseBody
    public int adVideo(Integer VideoID,String CreatTime,String VideoTitle,String VideoSrc,String VideoContent,Integer ReadCount,Integer CollectCount,String AuthorImage,String ViewImage,String CollectImage,String Link,String titleImage) {
    	Video video=new Video(VideoID,CreatTime,VideoTitle,VideoSrc,VideoContent,ReadCount,CollectCount,AuthorImage,ViewImage,CollectImage,Link,titleImage);
    	return userService.addVideo(video);
    }
    
    //点击收藏按钮后，收藏值+1的操作
   @RequestMapping(value="/changeCollectCount{NewsID}",method=RequestMethod.GET)
   @ResponseBody
    public int chaCollectCount(Integer NewsID) {
    	return userService.updateCollectCount(NewsID);
    }
    
    //点击收藏后，收藏照片变化的操作
   @RequestMapping(value="/changeCollectImage{NewsID}",method=RequestMethod.GET)
   @ResponseBody
   public int changeCollectImage(Integer NewsID){
	   return userService.updateCollectImage(NewsID);
   }
    
    //安全管理者的注册机制
   @RequestMapping(value="/registSecureMessage{manageUserID,ManagerUserNickname,passWord}")
   @ResponseBody
   public int reSecureMes(Integer manageUserID,String ManagerUserNickname,String passWord) {
	   ManageUser manager=new ManageUser(manageUserID,ManagerUserNickname,passWord);
	   return userService.addSecureManager(manager);
   }
   
    //安全管理者的登陆机制（在用户名返回后生成随机数）
   @RequestMapping(value="returnRandom{nickName}")
   @ResponseBody
   public int reRandom(String nickName) {
	   return userService.returnRandom(nickName);
   }
   @RequestMapping(value="returnRandomTrue{nickName}")
   @ResponseBody
   public String reRandomTrue(String nickName) {
	   return userService.findRandom(nickName);
   }
   @RequestMapping(value="secureIdentify{nickName}")
   @ResponseBody
   public String secIdentify(String nickName) {
	   return userService.secureIdentify(nickName);
   }
   
   //查询一条新闻后的评论
   @RequestMapping(value="findNewsComment{NewsID}")
   @ResponseBody
   public List<NewsComment> findNewsComment(Integer NewsID){
	   return userService.findNewsComment(NewsID);
   }
   
   //用户发表新闻评论的操作
   @RequestMapping(value="/addComment{CommentID,NewsID,NewsComment,AuthorID,CommentDate}")
   @ResponseBody
   public int addComment(Integer CommentID,Integer NewsID,String NewsComment,String AuthorID,String CommentDate) {
	   NewsComment comment=new NewsComment(CommentID,NewsID,NewsComment,AuthorID,CommentDate);
	   return userService.addNewsComment(comment);
   }
   
   //查询一条新闻后评论的条数
   @RequestMapping(value="/findCommentNum")
   @ResponseBody
   public int findComNum() {
	   return userService.findCommentNum();
   }
   
   //点击收藏后，将新闻加入到收藏列表中（先获取新闻）
   @RequestMapping(value="/getCollectNews{NewsID}")
   @ResponseBody
   public List<News> getCollectNews(Integer NewsID) {
	   return userService.addNewsToCollect(NewsID);
   }
   
   //点击新闻后，将新闻加入到收藏列表的操作
   @RequestMapping(value="/insertCollectNews{NewsID,NewsTitle,NewsContent,CoverImage,ReadCount,CreatTime,NewsConcreteContent,CollectCount,CollectImage,ViewImage,Link,AuthorImage}")
   @ResponseBody
   public int inCollectNews(Integer NewsID,String NewsTitle,String NewsContent,String CoverImage,Integer ReadCount,String CreatTime,String NewsConcreteContent,Integer CollectCount,String CollectImage,String ViewImage,String Link,String AuthorImage) {
	   News collectNews=new News(NewsID,NewsTitle,NewsContent,CoverImage,ReadCount,CreatTime,NewsConcreteContent,CollectCount,CollectImage,ViewImage,Link,AuthorImage);
	   return userService.insertCollectNews(collectNews);
   }
   
   //点击取消收藏后，将新闻从收藏列表中删除
   @RequestMapping(value="/removeCollectNews{NewsID}")
   @ResponseBody
   public int rmCollectNews(Integer NewsID) {
	   return userService.removeCollectNews(NewsID);
   }
   
   //收藏的最后一步为，将新闻从收藏列表中获取出来
   @RequestMapping(value="/findNewsFromCollectNews")
   @ResponseBody
   public List<News> findNewsFromCollectNews() {
	   return userService.findFromCollectList();
   }
   
   //管理者在删除新闻后，对新闻主键进行重新排序的操作，试验成功
   @RequestMapping(value="/sortNewsID")
   @ResponseBody
   public int sortNewID() {
	   return userService.sortNewsID();
   }
   
   //用户查找其中一条新闻的操作
   @RequestMapping(value="/findANews{NewsID}")
   @ResponseBody
   public News findAnews(Integer NewsID) {
	   return userService.findANews(NewsID);
   }
   
    @RequestMapping(value="/login")
    public String loginhtml() {
    	return "/login";
    }
    @RequestMapping(value="/a")
    public String loopHtml() {
    	return "/a";
    }
    @RequestMapping(value="/regist")
    public String registHtml() {
    	return "/regist";
    }
    @RequestMapping(value="/loginSecure")
    public String loginSecureHtml() {
    	return "/loginSecure";
    }
}