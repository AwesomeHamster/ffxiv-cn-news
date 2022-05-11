import axios, { AxiosRequestConfig } from 'axios'
import { RespData, defaultAxiosConfig, Datas, IParams, defaultParams } from '../config'

export async function getNews(config: {
  url?: string
  params?: IParams
  axiosConfig?: AxiosRequestConfig
}): Promise<Datas[]> {
  let datas: Datas[] = []
  await axios
    .get<RespData>(config.url ?? defaultAxiosConfig.defaultUrl, {
      headers: defaultAxiosConfig.headers,
      timeout: defaultAxiosConfig.timeout,
      responseEncoding: defaultAxiosConfig.responseEncoding,
      validateStatus: defaultAxiosConfig.validateStatus,
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
