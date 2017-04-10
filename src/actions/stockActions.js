import 'whatwg-fetch'

export function getStockData() {
	return dispatch => {
		dispatch({
			type: 'GET_STOCK_REQUEST',
			payload: null
		})

		fetch('/stock/read')
			.then(function(res) {
		    return res.json()
		  }).then(function(res) {
		    dispatch({
	        type: 'GET_STOCK_SUCCESS',
	        payload: res
	      })
		  }).catch(function(err) {
		  	console.log(err)
		    dispatch({
	        type: 'GET_STOCK_FAIL',
	        payload: err
	      })
		  })
	}
}

export function createItem(item) {
	return dispatch => {
		dispatch({
			type: 'CREATE_ITEM_REQUEST',
			payload: null
		})
		fetch('/stock/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify(item)
		}).then(function(res) {
		    return res.json()
		  }).then(function(res) {
		    dispatch({
	        type: 'CREATE_ITEM_SUCCESS',
	        payload: res.item
	      })
		  }).catch(function(err) {
		  	console.log(err)
		    dispatch({
	        type: 'CREATE_ITEM_FAIL',
	        payload: err
	      })
		  })
	}
}


export function filterByCategory(category) {
	return {
		type: 'FILTER_BY_CATEGORY',
		payload: category
	}
}

export function filterBySearch(query) {
	return {
		type: 'FILTER_BY_SEARCH',
		payload: query
	}
}

export function showItemModal(toggle) {
	return {
		type: 'SHOW_ITEM_MODAL',
		payload: toggle
	}
}

export function sortStockData(sortBy) {
	return {
		type: 'SORT_STOCK_DATA',
		payload: sortBy
	}
}