import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid rgb(193 13 12);
  margin: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      margin-right: 20px;
    }
    .keyword {
      display: flex;
      .item {
         .divider {
          margin: 0 15px;
          color: #ccc;
        }

        :last-of-type .divider{
          opacity:0
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`