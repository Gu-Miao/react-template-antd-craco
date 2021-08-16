/** @type import('react-router-cache-route').CacheRouteProps[] */
const routers = [
  {
    path: '/',
    component: 'home',
    exact: true
  },
  {
    path: '/examples',
    component: 'examples',
    exact: true
  },
  {
    path: '/nest',
    routers: [
      {
        path: '/',
        component: 'nestRouters',
        exact: true
      },
      {
        path: '/a',
        routers: [
          {
            path: '/',
            component: 'nestRouters/a',
            exact: true
          },
          {
            path: '/aa',
            component: 'nestRouters/a/aa',
            exact: true
          },
          {
            path: '/ab',
            component: 'nestRouters/a/ab',
            exact: true
          }
        ]
      },
      {
        path: '/b',
        component: 'nestRouters/b',
        exact: true
      },
      {
        path: '/c',
        component: 'nestRouters/c',
        exact: true
      }
    ]
  },
  {
    component: 'error'
  }
]

export default routers
