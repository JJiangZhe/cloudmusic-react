import request from './request'

export const getSongDetail = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}