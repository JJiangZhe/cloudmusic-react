import { getSongDetail } from '@/services/player'
import * as actionTypes from './constants'

// 当前播放歌曲
const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
})

// 播放列表
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

// 当前播放列表索引
const changeCurSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

// 切换播放模式
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

// 播放歌曲
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex(item => item.id === ids)
    if (index !== -1) {
      console.log('111')
      dispatch(changeCurSongIndexAction(index))
      const song = playList[index]
      dispatch(changeCurrentSongAction(song))
    } else {
      console.log('222')
      getSongDetail(ids).then(res => {
        console.log(res)
        const song = res.songs && res.songs[0]
        if (!song) return
        // 将最新的歌曲加入到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }
  }
}

// 加入播放列表
export const addPlayListAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex(item => item.id === ids)
    if (index === -1) {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 将最新的歌曲加入到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
      })
    }
  }
}

// 上一首 or 下一首
export const changeCurrentSong = (index) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const length = playList.length
    const befoI = getState().getIn(['player', 'currentSongIndex'])
    let currentI = befoI + index > length - 1 ? 0 : befoI + index
    currentI = currentI < 0 ? length - 1 : currentI
    dispatch(changeCurSongIndexAction(currentI))
    dispatch(changeCurrentSongAction(playList[currentI]))
  }
}

