package com.example.demo;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import java.util.List;
 
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper; //这里会报错，但并不影响
 
    @Override
    public int addUser(User user) {
        return userMapper.insertUser(user);
    }
 
    @Override
    public int deleteUser(Integer id) {
        return userMapper.deleteUser(id);
    }
 
    @Override
    public User selectUser(Integer id) {
        return userMapper.selectUser(id);
    }
 
    @Override
    public List<User> findAll() {
        return userMapper.selectAll();
    }
 
    @Override
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }
    
    //查询所有新闻
    @Override
    public List<News> findAllNews(){
    	return userMapper.searchAllNews();
    }
    
    //查询所有视频
    @Override
    public List<Video> findAllVideo(){
    	return userMapper.searchAllVideo();
    }
    
    //管理者删除新闻的操作
    @Override
    public int deleteNews(Integer id) {
    	return userMapper.managerDelNews(id);
    }
    
    //用户上传新闻
    @Override
    public int addNews(News news) {
    	return userMapper.insertNews(news);
    }
    
    //查询新闻数量
    @Override
    public int findNewsNum() {
    	return userMapper.searchNewsNum();
    }
    
    //查询视频数量
    @Override
    public int findVideoNum() {
    	return userMapper.searchVideoNum();
    }
    
    //点击喜欢按钮后更新喜欢值的操作
    @Override
    public int updateLikeCount(Integer newsId) {
    	return userMapper.likeCount(newsId);
    }
    
    //判断用户登录是否正确
    public ManageUser judgeManager(ManageUser manager) {
    	return userMapper.searchManageUserInfo(manager);
    }
    //注册用户信息
    public int addManagerUser(ManageUser manager) {
    	return userMapper.insertManagerUser(manager);
    }
    
    //查询管理者的数量
    public int findManagerNum() {
    	return userMapper.searchManagerNum();
    }
    
    //管理者删除视频
    public int deleteVideo(Integer id) {
    	return userMapper.managerDelVideo(id);
    }
    
    //用户上传视频的操作
    public int addVideo(Video video) {
    	return userMapper.insertVideo(video);
    }
    
    //点击收藏按钮后，收藏值+1的操作
    public int updateCollectCount(Integer newsId) {
    	return userMapper.collectCount(newsId);
    }
    
    //点击收藏按钮后，收藏照片变化的操作
    public int updateCollectImage(Integer newsId) {
    	return userMapper.changeNewsCollectImage(newsId);
    }
    
    //点击收藏后，将新闻加入到收藏列表中（先获取新闻）
    public List<News> addNewsToCollect(Integer newsId) {
    	return userMapper.collectNews(newsId);
    }
    
    //点击收藏后，将新闻加入到收藏列表的操作
    public int insertCollectNews(News collectNews) {
    	return userMapper.NewsToCollect(collectNews);
    }
    
    //收藏的最后一步为，将新闻从收藏列表中获取
    public List<News>findFromCollectList(){
    	return userMapper.selectFromCollectNews();
    }
    
    //点击收藏取消后，将新闻从收藏列表中删除
    public int removeCollectNews(Integer NewsID) {
    	return userMapper.deleteCollectNews(NewsID);
    }
    
    //安全管理者的注册机制
    public int addSecureManager(ManageUser manager) {
    	return userMapper.insertSecureManagerUser(manager);
    }
    
    //安全管理者的登陆机制（在用户名返回后生成随机数）
    public int returnRandom(String nickName) {
    	return userMapper.changeRandNum(nickName);
    }
    public String findRandom(String nickName) {
    	return userMapper.selectRandom(nickName);
    }
    public String secureIdentify(String nickName) {
    	return userMapper.selectSecureIdentify(nickName);
    }
    
    //查询一条新闻后的评论
    @Override
    public List<NewsComment> findNewsComment(Integer NewsID) {
    	return userMapper.searchNewsComment(NewsID);
    }
    
    //用户发表新闻评论的操作
    @Override
    public int addNewsComment(NewsComment comment) {
    	return userMapper.insertComment(comment);
    }
    
    //查询一条新闻后评论的条数
    @Override
    public int findCommentNum() {
    	return userMapper.searchCommentNum();
    }
    
    //管理者在删除新闻后，对新闻主键进行重新排序的操作
    @Override
    public int sortNewsID() {
    	return userMapper.updateNewsID();
    }
    
    //用户查找其中一条新闻的操作
    @Override
    public News findANews(Integer NewsID) {
    	return userMapper.selectANews(NewsID);
    }
    
    //测试
    @Override
    public List<TestUser> findTest(){
    	return userMapper.searchTest();
    }
    
}