export const categorys = new Map([
    ['all-news', '5309,5310,5311,5312,5313'],
    ['topics', '7186'],
    ['news', '5310'],
    ['official-events', '5311'],
    ['announcement', '5312'],
    ['unofficial-events', '5313'],
  ])
  
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