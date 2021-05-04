import { CssBaseline, styled, ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './app'
import theme from './app/theme/theme'
import BackgroundImg from './assets/img/Background.jpg'

export const Background = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: theme.zIndex.background,
  backgroundImage: `url(${BackgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  maxWidth: '100vw',
  maxHeight: '100vh',
}))

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background />
        <BrowserRouter>
          <Switch>
            {routes.map(route => (
              <Route path={route.path}>{route.component()}</Route>
            ))}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
