import {createStore} from 'redux';
// import { cartReducer } from './redux/reducer/reducer';
import rootred from './redux/reducer/main';


const store = createStore(
    // cartReducer
    rootred
)

export default store


