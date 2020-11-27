import React, { memo, Fragment } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'
import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="link">
            <p>
              {
                footerLinks.map(item => {
                  return (
                    <Fragment key={item.title}>
                      <a className="item" href={item.link}>{item.title}</a>
                      <span className="line">|</span>
                    </Fragment>
                  )
                })
              }
            </p>
            <p>
              <span className="mr16">网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a target="_blank" rel="noopener noreferrer" href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
            </p>
            <p>
              <span className="mr16">违法和不良信息举报电话：0571-89853516</span>
              <span> 举报邮箱：</span>
              <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <p>
              <span className="mr16">粤B2-20090191-18</span>
              <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/#/Integrated/index">工业和信息化部备案管理系统网站</a>
            </p>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
