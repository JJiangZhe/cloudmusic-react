import * as actionTypes from './constants'

import {
  getTopBanners,
  getPersonalized,
  getTopAlbum,
  getTopList,
  getTopArtists,
  getDjPaygift
} from '@/services/recommend'


// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispath => {
    getTopBanners().then(res => {
      dispath(changeTopBannerAction(res))
    })
  }
}

// 热门推荐
const changeHotRcmAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecAction = (limit) => {
  return dispath => {
    getPersonalized(limit).then(res => {
      dispath(changeHotRcmAction(res))
    })
  }
}

// 新碟上架
const changeTopAlbum = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUM,
  topAlbums: res.albums
})

export const getTopAlbumAction = (limit) => {
  return dispath => {
    getTopAlbum(limit).then(res => {
      dispath(changeTopAlbum(res))
    })
  }
}

// 榜单
const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopListAction = (idx) => {
  return dispath => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispath(changeNewRanking(res))
          break;
        case 2:
          dispath(changeOriginRanking(res))
          break;
        case 3:
          dispath(changeUpRanking(res))
          break;
        default:
          break;
      }
    })
  }
}

// 热门歌手
const changeTopArtists = (res) => ({
  type: actionTypes.CHANGE_TOP_ARTISTS,
  topArtists: res.artists
})

export const getTopArtistsAction = (limit) => {
  return dispath => {
    getTopArtists(limit).then(res => {
      dispath(changeTopArtists(res))
    })
  }
}

// 热门主播
const changeDjPaygift = (res) => ({
  type: actionTypes.CHANGE_DJ_PAYGIFT,
  djPaygift: res.data.list
})

export const getDjRecommendAction = (limit) => {
  return dispath => {
    getDjPaygift(limit).then(res => {
      dispath(changeDjPaygift(res))
    })
  }
}