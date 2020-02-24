export var AppNavigationConfig = [
    {
        label: 'Home',
        icon: 'home',
        route: '/'
      },
  
      {
        label: 'Users',
        icon: 'home',
        route: '/users/'
      },
      
      {
        label: 'Help',
        icon: 'info',
        route: 'help'
      },
  
      {
        label: 'Form',
        icon: 'info',
        route: 'form'
      },
  
      {
        label: 'Nav Item 1',
        icon: 'videocam',
        route: 'nav-item-1',
        children: [
          {
            label: 'Nav Item 1 - C(1)',
            icon: 'group',
            route: 'nav-item-1/child-1',
          },
  
          {
            label: 'Nav Item 1 - C(3)',
            icon: 'feedback',
            route: 'feedback'
          }
        ]
      }
  ];