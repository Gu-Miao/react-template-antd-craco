interface IRouter {
  when?: string
  component?: string
  path?: string | string[]
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

const routers: Array<IRouter> = [
  {
    path: '/',
    component: 'home',
    exact: true
  },
  {
    component: 'error'
  }
]

export default routers
