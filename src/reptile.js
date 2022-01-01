const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");

let categorys = new Map([
  ["newscont", "5309,5310,5311,5312,5313"],
  ["topnews", "7186"],
]);

const getNews = async (pageSize = 1, category = "newscont") => {
  let datas = new Array();
  let pageIndex = 0;
  let result = await axios({
    method: "GET",
    url: `https://ff.web.sdo.com/inc/newdata.ashx?url=List?gameCode=ff&category=${categorys.get(
      category
    )}&pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  });
  let data = result.data.Data;
  data.forEach((item) => {
    datas.push({
      id: item.Id,
      title: item.Title,
      url: item.Author,
      time: Date.parse(new Date(item.PublishDate)),
      image: item.HomeImagePath,
      description: item.Summary,
    });
  });
  return datas;
};

module.exports = { getNews };
