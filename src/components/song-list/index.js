import React, { memo } from 'react'

import { SongWrapper } from './style'

import {
  getCount,
  getSizeImage
} from '@/utils/data-format'

export default memo(function SongList(props) {
  const { list = [], copywriter = false } = props;
  return (
    <SongWrapper>
      {
        list.map(item => {
          return (
            <div className="item" key={item.id}>
              <div className="cover">
                <img className="image" src={getSizeImage(item.picUrl, 140)} alt={item.name} />
                <a href="/todo" className="mask image_cover">{item.name}</a>
                <div className="bottom sprite_covor">
                  <span className="icon sprite_icon" />
                  <span>{getCount(item.playCount)}</span>
                  <span className="play sprite_icon" />
                </div>
              </div>
              <a href="todo" className={copywriter ? 'name_1' : 'name'}>{item.name}</a>
              {
                copywriter
                &&
                <div style={{ display: "flex", alignContent: 'center' }}>
                  <span className="by">by </span>
                  <a href="todo" className="text_1">{item.copywriter}</a>
                </div>
              }
            </div>
          )
        })
      }
    </SongWrapper>
  )
})
