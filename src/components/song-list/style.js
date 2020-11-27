import styled from 'styled-components';

export const SongWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 140px;
    overflow: hidden;
    margin-bottom: 25px;

    .cover {
      width: 140px;
      height: 140px;
      position: relative;

      .image{
        width: 100%;
      }

      .mask{
        background-position: 0 0;
      }

      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 27px;
        width: 100%;
        color: rgb(204 204 204);
        background-position: 0 -537px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

        .icon {
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play{
          width: 16px;
          height: 17px;
          background-position: 0 -60px;
          cursor: pointer;
        }
      }
    }
    

    .name{
      color: #000000;
      font-size: 14px;
      margin-top: 10px;
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
    }

    .name_1{
      color: #000000;
      font-size: 14px;
      margin-top: 10px;
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .by{
      color: rgb(153 153 153);
    }

    .text_1{
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 6px;
    }
  }
`