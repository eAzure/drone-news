package com.example.demo;
 
import java.util.List;
 
public interface UserMapper {
    int insertUser(User user);
    int deleteUser(Integer id);
    User selectUser(Integer id);
    int updateUser(User user);
    List<User> selectAll();
  //查询所有新闻内容
    List<News> searchAllNews();
    //查询所有视频
    List<Video> searchAllVideo();
    //测试
    List<TestUser> searchTest();
    //管理者删除新闻
    int managerDelNews(Integer id);
    //用户上传新闻
    int insertNews(News news);
    //查询新闻数量
    int searchNewsNum();
    //查询视频数量
    int searchVideoNum();
    //点击喜欢按钮后更新喜欢值的操作
    int likeCount(Integer newsId);
    //判断用户登录是否正确
    ManageUser searchManageUserInfo(ManageUser manager);
    //注册用户信息
    int insertManagerUser(ManageUser manager);
    //查询管理者的数量
    int searchManagerNum();
    //管理者删除视频
    int managerDelVideo(Integer id);
    //用户上传视频的操作
    int insertVideo(Video video);
    //点击收藏按钮后收藏值+1
    int collectCount(Integer newsId);
    //点击收藏后，将收藏的按钮图片更改
    int changeNewsCollectImage(Integer newsId);
    //点击收藏后，将新闻加入到收藏列表中(先获取新闻)
    List<News> collectNews(Integer newsId);
    //点击收藏后，将新闻插入到新闻列表
    int NewsToCollect(News collectNews);
    //点击取消收藏后，将新闻从收藏列表中删除
    int deleteCollectNews(Integer NewsID);
    //收藏的最后一步为，将新闻从收藏列表中获取
    List<News>selectFromCollectNews();
    //安全管理者的注册机制
    int insertSecureManagerUser(ManageUser manager);
    //安全管理者的登陆机制（在用户名返回后生成随机数）
    int changeRandNum(String nickName);
    String selectRandom(String nickName);
    String selectSecureIdentify(String nickName);
    //查询一条新闻后的评论
    List<NewsComment> searchNewsComment(Integer NewsID);
    //用户上传新闻的操作
    int insertComment(NewsComment comment);
    //获取一条新闻评论的条数
    int searchCommentNum();
    //管理者在删除新闻后，对新闻主键进行重新排序的操作
    int updateNewsID();
    //用户查找其中一条新闻的操作
    News selectANews(Integer NewsID);
}