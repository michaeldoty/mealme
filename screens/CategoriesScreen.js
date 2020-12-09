import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTile from '../components/CategoriesGridTile';
import Colors from '../constants/colors';


//landing screen for the app
const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          }
        })
      }}
      />
    )
  }

  return (

    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default CategoriesScreen;