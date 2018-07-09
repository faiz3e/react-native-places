import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';


const listItem = (props) =>(

    <View style={styles.listItem}>
    <Text>{props.placename}
    </Text>
</View>
        
);
const styles= StyleSheet.create({
listItem:{
    width:"100%",
    padding:10,
    backgroundColor:"#eee",
    borderWidth: 1,
    borderColor: 'green',

}
});


export default listItem;