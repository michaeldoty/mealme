import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
// import Material Bottom Tab Navigator for Android styling - ios is default
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/colors';


const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
};

// StackNavigtaion component which handles the traversing of cards
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  Meal_Details: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  Meal_Details: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

// function to configure the general tab screen config
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarLabel: 'Categories',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      }
    },
    tabBarColor: 'white'
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor
    }
  }
}
// depending on the platform this will add additional config options
const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
  );

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

// set the tab navigator as the root with the stack navigators within it
export default createAppContainer(MainNavigator);