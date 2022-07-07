import React, { useRef } from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import RegisterFeature from './RegisterFeature';

const Routes = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          // @TODO: Change this line to use an analytics tool
          console.log(currentRouteName);
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      <RegisterFeature />
    </NavigationContainer>
  );
};

export default Routes;
