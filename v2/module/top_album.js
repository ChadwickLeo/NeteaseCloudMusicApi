// 新碟上架

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const date = new Date()

  const data = {
    area: query.area || 'ALL', // //ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
    limit: query.limit || 50,
    offset: query.offset || 0,
    type: query.type || 'new',
    year: query.year || date.getFullYear(),
    month: query.month || date.getMonth() + 1,
    total: false,
    rcmd: true,
  }
  return request(
    `/api/discovery/new/albums/area`,
    data,
    createOption(query, 'weapi'),
  )
}
