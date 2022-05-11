export interface RespData {
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

export interface Datas {
  id: number
  title: string
  url: string
  time: Date
  image: string
  description: string
}

export interface IParams {
  url: string
  category: string
  pageIndex: number
  pageSize: number
}
