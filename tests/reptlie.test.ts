import { describe, it } from 'mocha'
import { getNews } from '../src/index'

describe('#reptile.js', () => {
  it('test', async () => {
    const arr = await getNews(0, 5, 'announcement')
    console.log(arr)
    // fs.writeFileSync("./res.json",arr)
  })
})
