import { createStore } from 'redux'
import todoApp from './screens/Home/reducers/reducers'

let store = createStore(todoApp)