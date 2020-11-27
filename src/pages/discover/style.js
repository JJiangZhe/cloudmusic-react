import styled from 'styled-components';

export const DiscoverWrapper = styled.div``

export const DiscoverHeader = styled.div`
  height: 30px;
  background-color: #C20C0C;

  .menu {
    display: flex;
    padding-left: 182px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        color: #FFF;
        padding: 0 13px;
        margin: 3px 17px;
        
        &.active, &:hover{
          text-decoration: none;
          background: rgb(155 9 9);
          border-radius: 20px;
        }
      }
    }
  }
`
