const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let pageSize = 1;
let pageIndex = 0;
const getNews = (param) => {
  request(
    {
      url: param.url,
      method: "GET",
      headers: param.headers,
    },
    (error, response, result) => {
      // console.log(result.Code);
      let data = JSON.parse(result).Data;
      // console.log(rson.Data);
      // let data = new Array();
      // data = rson.Data;
      // console.log(data[0]);
      data.forEach((item, index) => {
        console.log(item.Id);
        console.log(item.Title);
        console.log(item.Summary);
        console.log(item.Author);
        console.log(item.HomeImagePath);
      });
    }
  );
};

getNews({
  url: `https://ff.web.sdo.com/inc/newdata.ashx?url=List?gameCode=ff&category=5309,5310,5311,5312,5313&pageIndex=${pageIndex}&pageSize=${pageSize}`,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
});
