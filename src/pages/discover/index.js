import React, { memo } from 'react'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverHeader, DiscoverWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function Discover(props) {
  return (
    <DiscoverWrapper>
      <DiscoverHeader>
        <div className="menu wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div>
      </DiscoverHeader>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
