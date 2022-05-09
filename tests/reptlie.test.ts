import { describe, it } from 'mocha'
import { getNews } from '../src/index'
import { AxiosConfig, categorys } from '../config'
describe('#reptile.js', () => {
  it('test', async () => {
    const arr = await getNews(0, 5, 'announcement')
    console.log(arr)
    console.log(AxiosConfig.timeout)
    console.log(categorys['self-group'])

    // fs.writeFileSync("./res.json",arr)
  })
})
