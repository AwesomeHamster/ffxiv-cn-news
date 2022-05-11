import axios, { AxiosRequestConfig } from 'axios'
import { RespData, Datas, IParams } from './config'

export const categorys: { [k: string]: string } = {
  'all-news': '5309,5310,5311,5312,5313',
  'topics': '7186',
  'news': '5310',
  'official-events': '5311',
  'announcement': '5312',
  'unofficial-events': '5313',
  'self-group': '',
}


export const defaultParams: IParams = {
  url: 'List?gameCode=ff',
  category: '5309,5310,5311,5312,5313',
  pageIndex: 0,
  pageSize: 10,
}

export const defaultAxiosConfig = {

}


export async function getNews(config: {
  url?: string
  params?: IParams
  axiosConfig?: AxiosRequestConfig
}): Promise<Datas[]> {
  let datas: Datas[] = []
  await axios
    .get<RespData>(config.url ?? 'https://ff.web.sdo.com/inc/newdata.ashx', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, compress, br',
        'Connection': 'close',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      responseEncoding: 'utf8',
      validateStatus: (status: number) => status >= 200 && status < 400,
      params: config.params ?? defaultParams,
      ...config.axiosConfig,
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
    })

  return datas
}
