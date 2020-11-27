import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { Slider, Tooltip } from 'antd';
import { changeSequenceAction, changeCurrentSong } from '../store/actionCreators'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/data-format'

import { PlayerBarWrapper, Lock, Content, Head, Btns, Play, Oper, Ctrl } from './style'

export default memo(function AppPlayerBar() {
  // 当前播放时间
  const [curTime, setCurTime] = useState(0)
  // 进度条
  const [progress, setProgress] = useState(0)
  // 是否在拖动进度条
  const [isChanging, setIsChanging] = useState(false)
  // 是否播放
  const [isPlay, setPlay] = useState(false)
  // 显示tip
  const [timeTip, setTimeTip] = useState(0)
  // 播放器Ref
  const audioRef = useRef()

  const { currentSong, sequence, playList, currentSongIndex } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence']),
    playList: state.getIn(['player', 'playList']),
    currentSongIndex: state.getIn(['player', 'currentSongIndex'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    if (currentSong.id) {
      setPlay(true)
      audioRef.current.play()
    }
  }, [currentSong])

  const defaultImage = currentSong.al ? getSizeImage(currentSong.al.picUrl, 34) : require('@/assets/img/default_album.jpg').default
  const duration = currentSong.dt || '0'
  const currentTime = formatMinuteSecond(curTime) || '00:00'

  // 播放歌曲
  const playMusic = useCallback(() => {
    // if(!currentSong.id) return
    if (playList.length > 0 && !currentSong.id) {
      dispatch(changeCurrentSong(0))
    }
    isPlay ? audioRef.current.pause() : audioRef.current.play();
    setPlay(!isPlay)
  }, [isPlay, currentSong, playList, dispatch])

  // 上一首 or 下一首
  const changeMusic = (index) => {
    dispatch(changeCurrentSong(index))
  }

  // 播放完毕下一首
  const onEnded = () => {
    if (sequence === 0) {
      dispatch(changeCurrentSong(currentSongIndex))
    } else {
      dispatch(changeCurrentSong(currentSongIndex + 1))
    }
  }

  const onTimeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChanging && currentTime !== 0) {
      setTimeTip(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100);
    }
    setCurTime(currentTime * 1000)
  }

  // 拖动时
  const sliderChange = useCallback((value) => {
    if (!currentSong.id) return
    setIsChanging(true)
    setProgress(value)
    setTimeTip(value * duration / 100)
  }, [currentSong.id, duration])

  // 拖动结束
  const sliderAfterChange = useCallback((value) => {
    if (!currentSong.id) return
    audioRef.current.currentTime = value / 100 * duration / 1000
    setIsChanging(false)
    if (!isPlay) {
      playMusic()
    }
  }, [duration, isPlay, playMusic, currentSong])

  const changeSequence = () => {
    let current = sequence + 1;
    if (current > 2) {
      current = 0
    }
    dispatch(changeSequenceAction(current))
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <Lock className="sprite_player">
        <a href="todo" className="icon sprite_player"> </a>
      </Lock>
      <Content className="wrap-v2">
        <Btns isPlay={isPlay}>
          <button className="prv sprite_player" title="上一首(ctrl + ⬅)" onClick={e => changeMusic(-1)}></button>
          <button className="play sprite_player" title="播放暂停(p)" onClick={e => playMusic()}></button>
          <button className="nxt sprite_player" title="下一首(ctrl + ➡)" onClick={e => changeMusic(1)}></button>
        </Btns>
        <Head>
          <img src={defaultImage} className="image" alt="" />
          <NavLink exact to="/discover/player?id=1473866543" className="sprite_player mask" ></NavLink>
        </Head>
        <Play curTime={80}>
          <div className="top-wrap">
            <a className="name" href="todo" title="Tung-Tung (Empty)">{currentSong.name || ''}</a>
            <a className="by" href="todo" title="(G)I-DLE">{currentSong.ar ? currentSong.ar[0].name : ''}</a>
          </div>
          <div className="bottom-wrap">
            <Slider defaultValue={30} value={progress} onChange={sliderChange}
              onAfterChange={sliderAfterChange} tipFormatter={e => formatMinuteSecond(timeTip)} />
            <span className="time">
              <em>{currentTime}</em> / {formatMinuteSecond(duration)}
            </span>
          </div>
        </Play>
        <Oper>
          <a href="todo" className="sprite_player add" > </a>
          <a href="todo" className="sprite_player share" > </a>
        </Oper>
        <Ctrl sequence={sequence}>
          <Tooltip title={['单曲循环', '随机播放', '循环播放'][sequence]} trigger={['hover', 'focus']}>
            <button className="sprite_player icn one" onClick={e => changeSequence()}></button>
          </Tooltip>
          <div className="sprite_player list">
            <span>{playList.length}</span>
          </div>
        </Ctrl>
      </Content>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={onEnded} />
    </PlayerBarWrapper >
  )



})

