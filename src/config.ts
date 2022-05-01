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

export const AxiosConfig = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, compress, br',
    'Connection': 'close',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
  timeout:  Number(process.env['AXIOS_TIMEOUT'])||1000,
  responseEncoding: 'utf8',
  validateStatus: (status: number) => status >= 200 && status < 400,
}
