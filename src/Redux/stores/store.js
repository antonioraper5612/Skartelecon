import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

//import Reducers
import { addUserReducer} from '../reducers/addUser.reducer'




const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;



const reducers = combineReducers({
    addUser: addUserReducer,
   
    
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

