import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  topAlbums: [],
  upRanking: [],
  newRanking: [],
  originRanking: [],
  topArtists: [],
  djPaygift: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_TOP_ALBUM:
      return state.set('topAlbums', action.topAlbums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case actionTypes.CHANGE_TOP_ARTISTS:
      return state.set('topArtists', action.topArtists)
    case actionTypes.CHANGE_DJ_PAYGIFT:
      return state.set('djPaygift', action.djPaygift)
    default:
      return state;
  }
}

export default reducer
