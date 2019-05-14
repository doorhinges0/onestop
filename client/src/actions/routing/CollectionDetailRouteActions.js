import _ from 'lodash'
import {buildGetAction} from './AsyncHelpers'
import {showErrors} from '../ErrorActions'

import {encodeQueryString} from '../../utils/queryUtils'
import {
  collectionGetDetailStart,
  collectionGetDetailComplete,
  collectionGetDetailError,
} from './CollectionDetailStateActions'

export const getCollection = collectionId => {
  // TODO used only by initSearchActions???
  const prefetchHandler = dispatch => {
    dispatch(collectionGetDetailStart(collectionId))
  }

  const successHandler = (dispatch, payload) => {
    dispatch(
      collectionGetDetailComplete(payload.data[0], payload.meta.totalGranules)
    )
  }

  const errorHandler = (dispatch, e) => {
    // dispatch(showErrors(e.errors || e)) // TODO
    dispatch(collectionGetDetailError(e.errors || e)) // TODO
  }

  return buildGetAction(
    'collection',
    collectionId,
    prefetchHandler,
    successHandler,
    errorHandler
  )
}

export const showDetails = (history, id) => {
  if (!id) {
    return
  }
  return (dispatch, getState) => {
    const state = getState()
    const query = encodeQueryString(
      (state && state.search && state.search.collectionFilter) || {}
    )
    const locationDescriptor = {
      pathname: `/collections/details/${id}`,
      search: _.isEmpty(query) ? null : `?${query}`,
    }
    history.push(locationDescriptor)
  }
}
