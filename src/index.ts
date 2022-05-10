import axios from 'axios'
import { RespData, AxiosConfig, Datas, IParams, Params } from '../config'

export async function getNews(config: { url?: string; params?: IParams }): Promise<Datas[]> {
  let datas: Datas[] = []
  await axios
    .get<RespData>(config.url ?? AxiosConfig.defaultUrl, {
      headers: AxiosConfig.headers,
      timeout: AxiosConfig.timeout,
      responseEncoding: AxiosConfig.responseEncoding,
      validateStatus: AxiosConfig.validateStatus,
      params: config.params ?? Params,
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
