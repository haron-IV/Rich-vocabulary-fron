import { Home, ConfigureDictionary } from '../views'

export enum Routes {
  home = '/',
  configureDictionary = '/configure-dictionary',
}

interface Route {
  path: string
  component: () => JSX.Element
}

const router: Route[] = [
  { path: Routes.home, component: Home },
  { path: Routes.configureDictionary, component: ConfigureDictionary },
]

export default router
