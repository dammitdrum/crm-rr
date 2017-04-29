import 'whatwg-fetch'

export function loadData() {
	return dispatch => {
		dispatch({
			type: 'GET_APP_DATA_REQUEST'
		})

		fetch('/stock/read')
			.then(function(res) {
		    return res.json()
		  }).then(function(res) {
		    dispatch({
	        type: 'GET_STOCK_SUCCESS',
	        payload: res
	      })
	      return fetch('/deals/read')
					.then(function(res) {
				    return res.json()
				  }).then(function(res) {
				    dispatch({
			        type: 'GET_DEALS_SUCCESS',
			        payload: res
			      })
			    	return fetch('/clients/read')
							.then(function(res) {
						    return res.json()
						  }).then(function(res) {
						    dispatch({
					        type: 'GET_CLIENTS_SUCCESS',
					        payload: res
					      })
				    	return fetch('/users/read')
								.then(function(res) {
							    return res.json()
							  }).then(function(res) {
							    dispatch({
						        type: 'GET_USERS_SUCCESS',
						        payload: res
						      })
						      dispatch({
						        type: 'GET_APP_DATA_SUCCESS'
						      })
						    })
					  	})
					})
		  }).catch(function(err) {
		  	console.log(err)
		    dispatch({
	        type: 'GET_APP_DATA_FAIL',
	        payload: err
	      })
		  })
	}
}

