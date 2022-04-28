import axios from 'axios'
import * as fs from 'fs-extra'

export const categorys = new Map([
  ['all-news', '5309,5310,5311,5312,5313'],
  ['topics', '7186'],
  ['news', '5310'],
  ['official-events', '5311'],
  ['announcement', '5312'],
  ['unofficial-events', '5313'],
])

export interface ResData {
  Code: string
  Message: string
  PageCount: number
  TotalCount: number
  RecordCount: number
  Data: DataArr[]
}

export interface DataArr {
  Id: number
  Articletype: number
  ApplicationCode: number
  CategoryCode: number
  SortIndex: number
  GroupIndex: number
  TitleClass: string
  Title: string
  Author: string
  PublishDate: Date
  HomeImagePath: string
  Summary: string
  OutLink: string
}

export async function getNews(pageIndex: number = 0, pageSize: number = 1, category: string = 'all-news') {
  let datas = new Array()
  let headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, compress, br',
    'Connection': 'close',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  }
  let timeout: number = 1000
  let responseEncoding: string = 'utf8'
  let url: string = `https://ff.web.sdo.com/inc/newdata.ashx?url=List?gameCode=ff&category=${categorys.get(
    category,
  )}&pageIndex=${pageIndex}&pageSize=${pageSize}`
  let urlt = "http://aaa.aa"
  let validateStatus = (status:number)=>(status>=200&&status<400)
  if () {
    
  } else {
    await axios
    .get<ResData>(urlt, {
      headers,
      timeout,
      validateStatus,
    })
    .then((resp) => {
      resp.data.Data.forEach((item) => {
        datas.push({
          id: item.Id,
          title: item.Title,
          url: item.Author,
          time: item.PublishDate,
          image: item.HomeImagePath,
          description: item.Summary,
        })
      })
    }).catch((err) => {
      let error = err.toJSON()
      datas.push({
        error: error.code,
        message: error.message
      })
    })
  }
  return datas
}

