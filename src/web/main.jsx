// Rendering
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Routing
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Hot reloading
import { AppContainer } from 'react-hot-loader'

// My redux config
import { configureStore } from './store'

// Get routes
import { routes } from './routes'

// Instantiation
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

function drawApp(getRoutes) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <Router history={history}>
            { getRoutes() }
          </Router>
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

// Finally, draw!
drawApp(routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const routes = require('./routes').routes
    drawApp(routes)
  })
}