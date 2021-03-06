import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ArticleList212434Navigator from '../features/ArticleList212434/navigator';
import ArticleList212433Navigator from '../features/ArticleList212433/navigator';
import ArticleList212432Navigator from '../features/ArticleList212432/navigator';
import Settings212429Navigator from '../features/Settings212429/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
ArticleList212434: { screen: ArticleList212434Navigator },
ArticleList212433: { screen: ArticleList212433Navigator },
ArticleList212432: { screen: ArticleList212432Navigator },
Settings212429: { screen: Settings212429Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
