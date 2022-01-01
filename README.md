# **ffxiv-cn-news-reptile**

用`JavaScript`写的爬虫

# 食用

## 提供
`getNews()`

可选参数
- `size：数量`
- `category：消息分类`

## 消息分类有以下几种
- 所有消息：`all-news`
- 置顶消息：`topics`
- 新闻：`news`
- 公告：`announcement`
- 官方活动：`official-events`
- 第三方活动：`unofficial-events`

## 返回类型

返回一个数组，每个元素存有以下属性

```JSON
  id:String     => 消息的编号
  title:        => 标题
  url:          => 链接
  time:         => 发布时间
  image:        => 封面图片的链接
  description:  => 消息概要
```