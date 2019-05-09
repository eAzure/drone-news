package com.example.demo;
 
import java.util.List;
 
public interface UserService {
    int addUser(User user);
    int deleteUser(Integer id);
    User selectUser(Integer id);
    int updateUser(User user);
    List<User> findAll();
    //查询所有新闻内容
    List<News> findAllNews();
    //查询所有视频
    List<Video> findAllVideo();
    //测试
    List<TestUser> findTest();
    //管理者删除新闻
    public int deleteNews(Integer id);
    //用户上传新闻
    int addNews(News news);
    //查询新闻数量
    int findNewsNum();
    //查询视频数量
    int findVideoNum();
    //点击喜欢按钮后更新喜欢值的操作
    int updateLikeCount(Integer newsId);
    //判断用户登录是否正确
    ManageUser judgeManager(ManageUser manager);
    //注册用户信息
    int addManagerUser(ManageUser manager);
    //查询管理者的数量
    int findManagerNum();
    //管理者删除视频
    int deleteVideo(Integer id);
    //用户上传视频的操作
    int addVideo(Video video);
    //点击收藏按钮后，收藏值+1的操作
    int updateCollectCount(Integer newsId);
    //点击收藏按钮后，收藏图片变化的操作
    int updateCollectImage(Integer newsId);
    //点击收藏后，将新闻加入到收藏列表中（先获取新闻）
    List<News> addNewsToCollect(Integer newsId);
    //点击收藏后，将新闻加入到收藏列表中
    int insertCollectNews(News collectNews);
    //点击取消收藏后，将新闻从收藏列表中移出
    int removeCollectNews(Integer NewsID);
    //收藏的最后一步为，将新闻从收藏列表中获取
    List<News> findFromCollectList();
    //安全管理者的注册机制
    int addSecureManager(ManageUser manager);
    //安全管理者的登陆机制（在用户名返回后生成随机数）
    int returnRandom(String nickName);
    String findRandom(String nickName);
    String secureIdentify(String nickName);
    //查询一条新闻后的评论
    List<NewsComment> findNewsComment(Integer NewsID);
    //用户发表新闻评论的操作
    int addNewsComment(NewsComment comment);
    //获取一条新闻评论的条数
    int findCommentNum();
    //管理者在删除新闻后，对新闻主键进行重新排序的操作
    int sortNewsID();
    //用户查找其中一条新闻的操作
    News findANews(Integer NewsID);
}