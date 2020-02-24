export var AppNavigationConfig = [
    {
        displayName: 'Home',
        iconName: 'home',
        route: '/'
      },
  
      {
        displayName: 'Users',
        iconName: 'home',
        route: '/users/'
      },
      
      {
        displayName: 'Help',
        iconName: 'info',
        route: 'help'
      },
  
      {
        displayName: 'Form',
        iconName: 'info',
        route: 'form'
      },
  
      {
        displayName: 'Nav Item 1',
        iconName: 'videocam',
        route: 'nav-item-1',
        children: [
          {
            displayName: 'Nav Item 1 - C(1)',
            iconName: 'group',
            route: 'nav-item-1/child-1',
          },
  
          {
            displayName: 'Nav Item 1 - C(3)',
            iconName: 'feedback',
            route: 'feedback'
          }
        ]
      }
  ];