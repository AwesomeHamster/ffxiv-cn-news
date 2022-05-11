import { describe, it } from 'mocha'
import { getNews } from '../src'
import { expect } from 'chai'


describe('#ffxiv cn news crawler', () => {
  it('should fetch news', async () => {
    const arr = await getNews({})
    expect(arr).to.be.an('array').and.has.length.at.least(1)
    expect(arr[0]).has.a.property('url').that.is.a('string')
  })
})
