import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredNameText, setEnteredNameText] = useState('');
  const [savedName, saveNameText] = useState('');

  function nameInputHandler(enteredText) {
    setEnteredNameText(enteredText);
  }

  function addNameHandler() {
    saveNameText(enteredNameText);
  }
 
  // next, add a text input for 'block types' building array/listing contents as per the course
  // but first, get this onto github

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
          <Text style={styles.textWithMargin}>Fuzzy schedule is go!</Text>
      </View>      
      <View>
        <View style={styles.yourName}>
          <TextInput 
            style={styles.nameInput} 
            placeholder='Type your name here'
            onChangeText={nameInputHandler} 
          />
          <Button title='Done' onPress={addNameHandler}/>
          <Button title='Clear' />
        </View>
        <View style={{flex: 1}}>
          <Text>Your name is... {savedName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Button title='Build my schedule' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: '40'
  },
  textWithMargin: {
    margin: 16
  },
  yourName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '60%',
    marginRight: 8,
    padding: 8
  }
});

// style={{borderWidth: 1, borderColor: 'green'}}
