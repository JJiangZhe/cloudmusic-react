import styled from 'styled-components'

export const BannerWrapper = styled.div`
background: url(${props => props.bgImage}) center/6000px;
transition: all .2s;
`

export const Banner = styled.div`
 display: flex;
    height: 270px;
    position: relative;
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    height: 270px;
    overflow: hidden;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png").default});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-40%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -70px;
    background-position: 0 -360px;
  }

  .right {
    right: -70px;
    background-position: 0 -508px;
  }
`

export const Content = styled.div`
  display: flex;
  overflow: hidden;

  border-style: solid;
  border-color: rgb(211, 211, 211);
  border-image: initial;
  border-width: 0px 1px;
`

export const ContentLeft = styled.div`
  width: 730px;
  padding: 0 20px 30px ;
  background-color: #FFF;
`

export const ContentRight = styled.div`
  width: 250px;
`

export const NewAlbum = styled.div`
  height: 184px;
  background: rgb(245, 245, 245);
  position: relative;
  padding: 0 30px;

  .arrow{
    width: 17px;
    height: 17px;
    padding: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    cursor: pointer;
  }

  .arrow-left {
    left: 5px;
    background-position: -260px -75px;

    &:hover {
      background-position: -280px -75px;
    }
  }

  .arrow-right {
    right: 5px;
    background-position: -300px -75px;
    
    &:hover {
     background-position: -320px -75px;
    }
  }

  .album-list {
    display: flex !important;
    justify-content: space-between;
    margin: 28px 0px 0px;
  }
`

export const RankingWrapper = styled.div`
  display: flex;
  height: 472px;
  background-image: url(${require("@/assets/img/recommend-top-bg.png").default});
`

export const NotLogin = styled.div`
  height: 126px;
  background-position: 0px 0px;
  padding: 16px 25px;

  .note {
    line-height: 22px;
    color: rgb(102, 102, 102);
    margin-bottom: 15px;
  }

  .btn {
    display: block;
    width: 100px;
    height: 31px;
    color: rgb(255, 255, 255);
    background-position: 0px -195px;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
      background-position: -110px -195px;
    }
  }
`

export const PopularWrapper = styled.div`
  padding: 15px 20px;
  background-color: #FFF;
  height: 100%;
  border-left: 2px solid #E9E9E9;
  
  .tit-line {
    height: 23px;
    border-bottom: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);

    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    .title {
      font-weight: bold;
    }
  }

  .singer-item {
    background: rgb(250, 250, 250);
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      background: rgb(244, 244, 244);
    }

    .image {
      width: 62px;
      height: 62px;
    }

    .name {
      margin-left: 20px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  .dj-list {
    display: flex;
    margin-bottom: 5px;

    .image {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    .info {
      width: 160px;
      margin-left: 10px;

      a {
        color: rgb(0, 0, 0);
      }

      p {
        color: rgb(102, 102, 102);
      }
    }
  }

`
