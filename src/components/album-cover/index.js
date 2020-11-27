import React, { memo, Fragment } from 'react'

import {
  getSizeImage
} from '@/utils/data-format'

import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { size, item = {}, bgp = "-845px", width } = props

  const playMusic = (item) => {
    console.log(item)
  }

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-cover" size={size} bgp={bgp}>
        <img className="image" src={getSizeImage(item.picUrl, size)} alt={item.name}></img>
        <a href="/todo" className="mask image_cover"> </a>
        <button className="play sprite_icon" onClick={e => playMusic(item)}></button>
      </div>
      <a className="name text-nowrap" href="todo">{item.name}</a>
      <p className="artist text-nowrap" href="todo">
        {
          item.artists.map((itec, index) => {
            return (
              <Fragment key={itec.id}>
                <a href="todo" alt={itec.name}>{itec.name}</a>
                {
                  index + 1 !== item.artists.length
                  &&
                  <span style={{ padding: '0 5px' }}>/</span>
                }
              </Fragment>
            )
          })
        }
      </p>
    </AlbumCoverWrapper>
  )
})

