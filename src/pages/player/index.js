import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {
  PlusOutlined,
  FolderAddOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  VerticalAlignBottomOutlined
} from '@ant-design/icons';
import { Button } from 'antd'

import { getSizeImage } from '@/utils/data-format'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function Player() {

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  return (
    <PlayerWrapper>
      {
        currentSong.al &&
        <div className="content wrap-v2">
          <PlayerLeft>
            <div className="cover">
              <img className="image" src={getSizeImage(currentSong.al.picUrl, 130)} alt={currentSong.al.name} />
              <span className="mask sprite_covor"></span>
            </div>
            <div className="cnt">
              <div className="hd">
                <i className="icon sprite_icon2" />
                <span className="title">{currentSong.name}</span>
              </div>
              <p className="desc">歌手 :
                <a className="link" href="todo">{currentSong.ar[0].name}</a>
              </p>
              <p className="desc">所属专辑 :
                <a className="link" href="todo">{currentSong.al.name}</a>
              </p>
              <div className="btns">
                <Button type="primary" icon={<PlayCircleOutlined />}>播放</Button>
                <Button className="btn" icon={<PlusOutlined />}>歌单</Button>
                <Button className="btn" icon={<FolderAddOutlined />}>收藏</Button>
                <Button className="btn" icon={<VerticalAlignBottomOutlined />}>下载</Button>
                <Button className="btn" icon={<MessageOutlined />}>(2222)</Button>
              </div>
            </div>
          </PlayerLeft>
          <PlayerRight></PlayerRight>
        </div>
      }
    </PlayerWrapper>
  )
})
