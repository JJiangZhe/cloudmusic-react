import React, { memo, useEffect, useState, useCallback, useRef, Fragment } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getTopBannerAction, getHotRecAction, getTopAlbumAction,
  getTopListAction, getTopArtistsAction, getDjRecommendAction
} from './store/actionCreators'

import { Carousel } from 'antd';

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import SongList from '@/components/song-list'
import AlbumCover from '@/components/album-cover'
import TopRanking from '@/components/top-ranking'

import {
  BannerWrapper, Banner, BannerLeft, BannerRight,
  BannerControl, Content, ContentLeft, ContentRight,
  NewAlbum, RankingWrapper, NotLogin, PopularWrapper
} from './style'

import { getSizeImage } from '@/utils/data-format'

export default memo(function Recommend(props) {

  const {
    topBanners, hotRecommend, topAlbums, upRanking, newRanking,
    originRanking, topArtists, djPaygift
  } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners']),
    hotRecommend: state.getIn(['recommend', 'hotRecommends']),
    topAlbums: state.getIn(['recommend', 'topAlbums']),
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
    topArtists: state.getIn(['recommend', 'topArtists']),
    djPaygift: state.getIn(['recommend', 'djPaygift'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
    dispatch(getHotRecAction(8))
    dispatch(getTopAlbumAction(10))
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
    dispatch(getTopArtistsAction(5))
    dispatch(getDjRecommendAction(5))
  }, [dispatch])

  // 轮播图索引 ref 切换
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef()
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const topAlbumRef = useRef()

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        {/* 轮播图 */}
        <Banner className="wrap-v2">
          <BannerLeft>
            <Carousel ref={bannerRef} effect="fade" autoplay beforeChange={bannerChange}>
              {
                topBanners.map(item => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                    </div>
                  )
                })
              }
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
          </BannerControl>
        </Banner>
      </BannerWrapper>

      <Content className="wrap-v2">
        <ContentLeft>
          <ThemeHeaderRcm title={'热门推荐'} keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
          <SongList list={hotRecommend}></SongList>

          <ThemeHeaderRcm title={'新碟上架'} />
          <NewAlbum>
            <button className="arrow arrow-left sprite_02"
              onClick={e => topAlbumRef.current.prev()}></button>
            <Carousel ref={topAlbumRef} dots={false}>
              {
                [0, 1].map(item => {
                  return (
                    <div className="album-list" key={item}>
                      {
                        topAlbums.slice(item * 5, (item + 1) * 5).map(itex => {
                          return (
                            <AlbumCover className="album-item" key={itex.id} item={itex} width="118" size="100" bgp='-570px'></AlbumCover>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
            <button className="arrow arrow-right sprite_02"
              onClick={e => topAlbumRef.current.next()}></button>
          </NewAlbum>

          <ThemeHeaderRcm title={'榜单'} />

          <RankingWrapper>
            <TopRanking item={upRanking}></TopRanking>
            <TopRanking item={newRanking}></TopRanking>
            <TopRanking item={originRanking}></TopRanking>
          </RankingWrapper>

        </ContentLeft>
        <ContentRight>
          <NotLogin className="sprite_02">
            <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <button className="btn sprite_02">用户登陆</button>
          </NotLogin>
          <PopularWrapper>
            <div className="tit-line">
              <span className="title">热门歌手</span>
              <a href="todo">查看全部</a>
            </div>
            <Fragment>
              {
                topArtists.map(item => {
                  return (
                    <div className="singer-item" key={item.id}>
                      <img className="image" src={getSizeImage(item.picUrl, 62)} alt={item.name} />
                      <span className="name">{item.name}</span>
                    </div>
                  )
                })
              }
            </Fragment>
            <div className="tit-line">
              <span className="title">热门电台</span>
            </div>
            <Fragment>
              {
                djPaygift.map(item => {
                  return (
                    <div className="dj-list" key={item.id}>
                      <img className="image" src={getSizeImage(item.picUrl, 40)} alt={item.name} />
                      <div className="info">
                        <a className="text-nowrap" href="todo" alt={item.name}>{item.name}</a>
                        <p className="text-nowrap">{item.rcmdText}</p>
                      </div>
                    </div>
                  )
                })
              }
            </Fragment>
          </PopularWrapper>
        </ContentRight>
      </Content>
    </div>
  )
})

