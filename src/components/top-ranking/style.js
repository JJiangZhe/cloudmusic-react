import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;
  .header {
    height: 100px;
    margin: 20px 0  0 20px;
    display: flex;
    .image {
      position: relative;
      width: 80px;
      height: 80px;
    }
    .tit {
      margin-left: 10px;
      .name {
        font-weight: bold;
        color: rgb(51 51 51);
        cursor: pointer;
        margin-bottom: 10px;
      }

      .btn {
        width: 22px;
        height: 22px;
        cursor: pointer;
      }

      .play {
        margin-right: 15px;
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .fave {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    height: 319px;
    margin-left: 20px;
    line-height: 32px;
    .item {
      display: flex;

      &:hover .operate{
        display: flex;
      }

      &:hover .name{
        width: 94px;
      }

      .no {
        width: 35px;
        height: 32px;
        font-size: 16px;
        text-align: center;     
      }

      .no-top{
        color: rgb(193 13 12);
      }

      .name {
        width: 170px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(0 0 0);
      }

      .operate {
        display: flex;
        display: none;
        align-items: center;

        .btn {
          width: 17px;
          height: 17px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }

        .add {
          margin: 3px 8px 0 10px;
          background-position: 0 -700px;

          &:hover {
            background-position: -22px -700px;
          }
        }

        .save {
          background-position: -297px -268px;

          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 32px;
    margin-right: 20px;
    justify-content: flex-end;

    .more {
      color: rgb(0 0 0);
    }
  }
`