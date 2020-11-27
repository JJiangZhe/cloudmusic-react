import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  .content {
    background: url(${require('@/assets/img/wrap-bg.png').default}) repeat-y;
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 709px;
  display: flex;
  padding: 40px;

  .cover {
    width: 198px;
    height: 198px;
    position: relative;

    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%)
    }

    .mask {
      position: absolute;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
      background-position: -140px -580px;
    }
  }

  .cnt {
    margin-left: 30px;
    .hd {
      display: flex;
      align-items: center;
      .icon {
        display: block;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }
      .title {
        margin-left: 10px;
        font-size: 24px;
      }
    }

    .desc {
      margin: 10px 0;
      color: rgb(153 153 153);
      .link {
        color: rgb(12 115 194);
        margin-left: 8px;
      }
    }

    .btns {

      span {
        font-size: 12px;
      }

      .ant-btn {
        padding: 4px 8px;
      }

      .btn {
        margin-left: 8px;
      }
    }
  }
`

export const PlayerRight = styled.div``
