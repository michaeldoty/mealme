import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen Screen!</Text>
      <Button title='Go to MealDetailScreen' onPress={() => {
        props.navigation.navigate('MealDetail')
      }} />
      <Button title='Go Back' onPress={() => {
        props.navigation.goBack();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealScreen;