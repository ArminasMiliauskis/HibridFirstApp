import React, { Component } from 'react';

import {

  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
      this.state = {
        text1:'black',
        text2:'black',
        text3:'black',
        text4:'black',
      };
  }

  ChangeColorFunction=()=>
 { 
  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
  this.setState({
    text4 : ColorCode
  })
 }

  textcolorchange(int){
    if(int === 1){
      if(this.state.text1 === 'black'){
        this.setState({
          text1: 'yellow'
        });
      }else {
        this.setState({
          text1:'black'
        });
      }
    }else if(int === 2){
      if(this.state.text2 === 'black'){
        this.setState({
          text2: 'green'
        });
      }else {
        this.setState({
          text2:'black'
        });
      }
    }else if(int === 3){
      if(this.state.text3 === 'black'){
        this.setState({
          text3: 'red'
        });
      }else {
        this.setState({
          text3:'black'
        });
      }
    }else if(int === 4){
      if(this.state.text4 === 'black'){
        this.ChangeColorFunction()
      }else {
        this.setState({
          text4:'black'
        });
      }
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.sectionContainer, { backgroundColor: '#d3d3d3' }]}>
        <View>
            <Pressable style={styles.button} onPress={() => this.textcolorchange(1)}>
              <Text style={styles.buttontext}>{"Button 1"}</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.button} onPress={() => this.textcolorchange(2)}>
              <Text style={styles.buttontext}>{"Button 2"}</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.sectionContainer1, { backgroundColor: '#d3d3d3' }]}>
          <View>
            <Pressable style={styles.button} onPress={() => this.textcolorchange(3)}>
              <Text style={styles.buttontext}>{"Button 3"}</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.button} onPress={() => this.textcolorchange(4)}>
              <Text style={styles.buttontext}>{"Button 4"}</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.sectionContainer2, { backgroundColor: '#b0c4de' }]}>
          <View>
          <View style={{ height: 40, borderColor: 'black', borderWidth: 2}}>        
        <Text style={[styles.text,{color:this.state.text1}]}>Text 1</Text>
        </View>
          </View>
          <View>
          <View style={{ height: 40, borderColor: 'black', borderWidth: 2}}>        
        <Text style={[styles.text,{color:this.state.text2}]}>Text 2</Text>
        </View>
          </View>
        </View>
        <View style={[styles.sectionContainer2, { backgroundColor: '#b0c4de' }]}>
          <View>
          <View style={{ height: 40, borderColor: 'black', borderWidth: 2}}>        
        <Text style={[styles.text,{color:this.state.text3}]}>Text 3</Text>
        </View>
          </View>
          <View>
          <View style={{ height: 40, borderColor: 'black', borderWidth: 2}}>        
        <Text style={[styles.text,{color:this.state.text4}]}>Text 4</Text>
        </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column' // collumn ir row 
  },

  sectionContainer: {
    flex: 1,
    justifyContent: "space-around",    //flex-start, flex-end, center, space-between, space-around ir space-evenly
    alignItems: "center",   //flex-start, flex-end, center, stretch ir baseline
    flexDirection: 'row'
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
  buttontext: {
    color: 'black',
    fontSize: 25,
  },
  sectionContainer1: {
    flex: 1,
    justifyContent: "space-around",    //flex-start, flex-end, center, space-between, space-around ir space-evenly
    alignItems: "center",   //flex-start, flex-end, center, stretch ir baseline
    flexDirection: 'row'
  },

  sectionContainer2: {
    flex: 1,
    justifyContent: "space-around",    //flex-start, flex-end, center, space-between, space-around ir space-evenly
    alignItems: "center",   //flex-start, flex-end, center, stretch ir baseline
    flexDirection: 'column'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});



