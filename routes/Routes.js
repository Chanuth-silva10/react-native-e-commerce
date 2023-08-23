import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/auth/Splash";
import Tabs from "./tabs/Tabs";
import CheckoutScreen from "../screens/user/CheckoutScreen.js";
import MyOrderScreen from "../screens/user/MyOrderScreen";
import CategoriesScreen from "../screens/user/CategoriesScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="tab" component={Tabs} />
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen name="myorder" component={MyOrderScreen} />
        <Stack.Screen name="categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
