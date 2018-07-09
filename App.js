import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button ,Text} from 'react-native';
import ListItem from './src/components/listItem/ListItem';
// import ListItem from './src/components/listItem/ListItem';
// class UselessTextInput extends Component {
//   render() {
//     return (
//       <TextInput
//         {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//         editable = {true}
//         maxLength = {40}
//         style={{width:300,borderColor:"red"}}
//       />
//     );
//   }
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      places: ["pune","mumbai"]
    };
  }
  isPressed = () => {
    if (this.state.text.trim() === '') {
      return;
    }
    this.setState(prevState=>{
      return {
        places: prevState.places.concat(prevState.text)
      }

    })
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
  const placesOut = this.state.places.map((place,i) => (<ListItem key={i} placename={place}>{place}</ListItem>));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter text"
            style={styles.placeInput}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />

            <Button title="Add"
              style={styles.placeButton}
              onPress={this.isPressed}
            />
       
          </View>
          <View style={styles.listContainer}>
    {placesOut}
    {/* <ListItem/> */}

            </View >

          {/* <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       /> */}
        </View>
        );
      }
    }
    
    // skip these lines if using Create React Native App
    
const styles = StyleSheet.create({
          container: {
          flex: 1,
        paddingTop: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start"
        // justifyContent: "center",
      },
  inputContainer: {
          // flex: 1,
          flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        // alignItems:"center",
        width:"100%",
        borderWidth: 0.5,
        borderColor: 'red',
      },
  placeInput:{
          width: "70%",
        borderWidth: 0.5,
        borderColor: 'blue',
      },
  placeButton: {
          width: "30%",
        // backgroundColor:"lightblue"
        // borderColor:"red",
        // border:1
        borderWidth: 1,
        borderColor: 'green',
    
      },
      listContainer: {
        width: "100%",
      // backgroundColor:"lightblue"
      // borderColor:"red",
      // border:1
     
    },
    

});




// export class ListItem extends Component {
//   render() {
    
//       return (
//         <View >
//         <Text>{this.props.children}
//         </Text>
//     </View>
            
//       );
//   }
// }
