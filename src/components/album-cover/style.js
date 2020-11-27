import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + "px"}; 

  .name {
    font-size: 12px;
    padding-right: 5px;
    margin-top: 10px;
    line-height: 1.2;
    color: rgb(0, 0, 0);
  }

  .artist {
    font-size: 12px;
    margin-top: -5px;
  }

  .album-cover {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};

    .image {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }

    .play {
      display: none;
      position: absolute;
      right: 22px;
      bottom: 4px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      cursor: pointer;
    }

    &:hover .play {
      display: block;
    }
  }
`