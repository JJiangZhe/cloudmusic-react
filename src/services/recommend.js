import request from './request'

// 轮播图
export const getTopBanners = () => {
  return request({
    url: "/banner"
  })
}

// 热门推荐
export const getPersonalized = (limit) => {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export const getTopAlbum = (limit) => {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 榜单
export const getTopList = (idx) => {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}

// 热门歌手
export const getTopArtists = (limit) => {
  return request({
    url: "/top/artists",
    params: {
      limit
    }
  })
}

// 热门主播
export const getDjPaygift = (limit) => {
  return request({
    url: "/dj/paygift",
    params: {
      limit
    }
  })
}