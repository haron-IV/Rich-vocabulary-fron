import { CssBaseline, styled } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './app'
import BackgroundImg from './assets/img/Background.jpg'

export const AppStyled = styled('div')({
  backgroundImage: `url(${BackgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
})

function App() {
  return (
    <AppStyled>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route path={route.path}>{route.component}</Route>
          ))}
        </Switch>
      </BrowserRouter>
    </AppStyled>
  )
}

export default App
