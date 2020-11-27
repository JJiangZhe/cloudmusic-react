import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  height: 52px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;

  background-position: 0 0;
  background-repeat: repeat;
`

export const Lock = styled.div`
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px;

  .icon {
    display: block;
    width: 18px;
    height: 18px;
    margin: 6px 0 0 17px;
    background-position: -100px -380px;

    &:hover {
      background-position: -100px -400px;
    }
  }
`

export const Content = styled.div`
  position: absolute;
  height: 47px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);

  color: #FFF;
  display: flex;
`

export const Btns = styled.div`
  display: flex;
  width: 137px;
  padding-top: 6px;

  button {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prv {
    margin-top: 4px;
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    background-position: 0 ${props => props.isPlay ? '-165px' : '-204px'};
    margin: 0 8px;

    &:hover {
      background-position: -40px ${props => props.isPlay ? '-165px' : '-204px'};
    }
  }

  .nxt {
    margin-top: 4px;
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const Head = styled.div`
  position: relative;
  width: 34px;
  height: 34px;

  margin-top: 6px;
  cursor: pointer;

  .image {
    width: 34px;
    height: 34px;
  }

  .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
    display: block;
    background-position: 0 -80px;
  }
`

export const Play = styled.div`

.top-wrap {
  margin: 3px 0 0 15px;

  .name {
    color: rgb(232 232 232);
  }

  .by {
    margin-left: 20px;
    color: rgb(155 155 155);
  }
}

.bottom-wrap {
  width: 608px;
  margin-left: 15px;
  display: flex;
  align-items: center;

  .ant-slider {
    width: 493px;
    margin: 0;
    padding: 0;
    height: 8px;

    .ant-slider-track {
      height: 9px;
      background: url(${require('@/assets/img/progress_bar.png').default}) right -66px;
    }

    .ant-slider-rail {
      height: 9px;
      background: url(${require('@/assets/img/progress_bar.png').default}) right -30px;
    }

    .ant-slider-handle {
      width: 22px;
      height: 24px;
      border: none;
      margin-top: -7px;
      background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;

      &:hover {
        background: url(${require('@/assets/img/ply_btn_hvr.png').default}) 0 -264px;
      }
    }
  }

  .time {
    display:block;
    margin-left: 20px;
    color: rgb(121 121 121);

    em {
      color: rgb(161 161 161);
    }
  }
}
  
`

export const Oper = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
    width: 25px;
    height: 25px;
  }

  .add {
    background-position: -88px -163px;

    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;

    &:hover {
      background-position: -114px -189px;
    }
  }
`

export const Ctrl = styled.div`
  position: relative;
  width: 113px;
  margin-left: 20px;
  display: flex;
  align-items: center;

  .icn {
    display: block;
    width: 25px;
    height: 25px;

    &:nth-child(2){
      margin: 0 4px;
    }
  }

  .vol {
    background-position: -2px -248px;

    &:hover {
      background-position: -31px -248px;
    }
  }

  .one {
    background-position: ${props => {
    switch (props.sequence) {
      case 0:
        return '-66px -344px';
      case 1:
        return '-66px -248px'
      case 2:
        return '-3px -344px'
      default:
        break
    }
  }};

    &:hover {
      background-position: ${props => {
    switch (props.sequence) {
      case 0:
        return '-93px -344px';
      case 1:
        return '-93px -248px'
      case 2:
        return '-33px -344px'
      default:
        break
    }
  }};
    }
  }

  .list {
    position: relative;
    width: 59px;
    height: 26px;
    background-position: -42px -68px;
    cursor: pointer;

    &:hover {
      background-position: -42px -98px;
    }

    span {
      position: absolute;
      top: 4px;
      right: 16px;
      color: rgb(102 102 102);
    }
  }
`

