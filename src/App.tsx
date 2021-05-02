import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './app'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route path={route.path}>{route.component}</Route>
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
