// redux thunk return a function by default

const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const intialState = {
 loading: false, //start
 users: [], //store data
 error: '' // for error display
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {

    return {
         
        type:FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = users => {
return {

    type: FETCH_USERS_SUCCESS,
    payload: users
}
}

const fetchUserFailure = error => {

return {

    type: FETCH_USERS_FAILURE,
    payload: error
}

}

const reducer = (state = intialState , action) => {

    switch(action.type) {
 
        case FETCH_USERS_REQUEST:
         return {

            ...state,
            loading: true

         }
         case FETCH_USERS_SUCCESS:
             return {
           
                loading: false,
                users: action.payload,
                error: ''
             }
 
             case FETCH_USERS_FAILURE:
                 return{

                    loading: false,
                    User: [],
                    error: action.payload
                 }
    }
}


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())

  axios.get('https://jsonplaceholder.typicode.com/users') 
  .then(response => {
  // response.data is the array of users
  const users = response.data.map(user=>user.name)
  dispatch(userSuccess(users))
  })  
  .catch (error => {
// error.message is the error description
dispatch(userError(error.message))

})
}}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.ncsubscribe(() => {console.log(store.getState())});

store.dispatch(fetchUsers());
//unsubscribe();

