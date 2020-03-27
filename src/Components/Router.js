import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from './Login';
import Welcome from './Welcome';

const Router = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
  },
  {
    initialRouteName: Login,
  },
);

export default createAppContainer(Router);
