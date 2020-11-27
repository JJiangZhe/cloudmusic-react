import React, { memo } from 'react'

import { useDispatch } from 'react-redux'

import {
  getSizeImage
} from '@/utils/data-format'

import { TopRankingWrapper } from './style'
import { getSongDetailAction, addPlayListAction } from '@/pages/player/store/actionCreators'

export default memo(function TopRanking(props) {
  const { item } = props

  const dispatch = useDispatch()
  // 播放
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

  // 加入歌单
  const addPlayList = (item) => {
    dispatch(addPlayListAction(item.id))
  }

  return (
    <TopRankingWrapper>
      {
        item &&
        <div className="header">
          <div className="image">
            <img src={getSizeImage(item.coverImgUrl, 80)} alt={item.name}></img>
            <a href="/todo" className="image_cover"> </a>
          </div>
          <div className="tit">
            <h3 className="name">{item.name}</h3>
            <button className="btn play sprite_02"></button>
            <button className="btn fave sprite_02"></button>
          </div>
        </div>
      }
      <div className="list">
        {
          item.tracks &&
          item.tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <span className={'no ' + (index < 3 && 'no-top')}>{index + 1}</span>
                <a href="todo" className="name">{item.name}</a>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={e => playMusic(item)} title="播放"></button>
                  <button className="btn sprite_icon2 add" onClick={e => addPlayList(item)} title="添加到播放列表"></button>
                  <button className="btn sprite_02 save" title="收藏"></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a className="more" href="todo">查看更多</a>
      </div>
    </TopRankingWrapper>
  )
})
