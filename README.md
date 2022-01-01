# **ffxiv-cn-news-reptile**

用`JavaScript`写的爬虫

# 食用

提供
`getNews()`

可选参数
- `size：数量`
- `category：消息分类`

消息分类有以下几种
- 所有消息：`newscont`
- 置顶消息：`topnews`
- 新闻：`news`
- 公告：`announcement`
- 官方活动：`official activity`
- 第三方活动：`Third party activity`

返回类型

```javascript
Array
[{
    id: string;
    title: string;
    url: string;
    time: string;
    image: string;
    description: string;
},{...},...]
```