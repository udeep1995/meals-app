import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


const MealDetailScreen = props => {   return (
    <View style = {styles.screen}>
        <Text>The Meals Details Screen</Text>
        <Button title="Go Back" onPress={()=>{
            props.navigation.goBack();
        }}/>
        <Button title="Go Back to Categories" onPress={()=>{
            props.navigation.popToTop();
        }}/>
    </View>
)
};

const styles = StyleSheet.create({
screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}
})
export default MealDetailScreen;