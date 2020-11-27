import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid rgb(211 211 211);
  background: rgb(242 242 242);
  padding: 20px 0;

  .content{
    display: flex;
    align-items: center;
    justify-content: space-between
  }
`

export const FooterLeft = styled.div`
  .link {
    .item {
      color: rgb(153 153 153);
    }
    .line {
      color: rgb(194 194 194);
      margin: 0 16px;
    }
    .mr16{
      margin-right: 16px;
    }
    p {
      line-height: 24px;
    }
  }

`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
