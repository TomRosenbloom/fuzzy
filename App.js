import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredNameText, setEnteredNameText] = useState('');
  const [savedName, saveNameText] = useState('');
  const [enteredBlockType, setBlockTypeText] = useState('');
  const [blockTypes, setBlockTypes] = useState([]);

  function nameInputHandler(enteredText) {
    setEnteredNameText(enteredText);
  }

  // Handle the "Clear" button press (for name - not generic at this point)
  const clearNameText = () => {
    setEnteredNameText(''); // Clear the input field
    saveNameText(''); // forget saved name
  };

  function addNameHandler() {
    saveNameText(enteredNameText);
  }

  function blockTypeInputHandler(enteredText) {
    setBlockTypeText(enteredText);
  }

  function addBlockTypeHandler() {
    setBlockTypes(currentBlockTypes => [...currentBlockTypes, enteredBlockType]);
  }
 
  // next, add a text input for 'block types' building array/listing contents as per the course

  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.welcome}>Fuzzy schedule is go!</Text>
      </View>      

      <View>
        <View style={styles.yourName}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Type your name here'
            value={enteredNameText}
            onChangeText={nameInputHandler} 
          />
          <Button title='Done' onPress={addNameHandler}/>
          <Button title='Clear' onPress={clearNameText} />
        </View>
        <View style={{flex: .1}}>
          <Text style={styles.feedbackText}>Your name is... {savedName}</Text>
        </View>

        <View style={styles.blockType}>
          <TextInput
            style={styles.textInput}
            placeholder='Type name of block type'
            onChangeText={blockTypeInputHandler}
          />
          <Button title='Add' onPress={addBlockTypeHandler}/>
        </View>
        <View style={styles.blockTypeList}>
          {blockTypes.map((blockType) => <Text>{blockType}</Text>)}
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
    justifyContent: 'flex-start',
    padding: '20'
  },
  welcome: {
    margin: 16
  },
  yourName: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  blockType: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  blockTypeList: {
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '60%',
    marginRight: 8,
    padding: 8
  },
  feedbackText: {
    fontStyle: 'italic',
    color: '#bbb',
    paddingLeft: 10
  }
});

// style={{borderWidth: 1, borderColor: 'green'}}
/*
,
    borderColor: 'red',
    borderWidth: 1
*/