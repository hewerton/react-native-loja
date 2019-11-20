import React from "react";
import Loja from "./src/components/loja.screen";
import HomeScreen from "./src/screens/home";
import StoreDetailsScreen from "./src/screens/storeDetails";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
  // Configuração de rotas
  const AppNavigator = createStackNavigator(
    {
      StoreDetails: StoreDetailsScreen,
      Home: HomeScreen
    },
    {
      initialRouteName: "Home"
    }
  );

  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
}
