import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import BlockTypeItem from './components/BlockTypeItem';
import BlockTypeInput from './components/BlockTypeInput';

export default function App() {
  const [enteredNameText, setEnteredNameText] = useState('');
  const [savedName, setSavedName] = useState('');
  const [blockTypes, setBlockTypes] = useState([]);

  const nameInputHandler = (someText) => {
    setEnteredNameText(someText);
  };

  const clearNameText = () => {
    setEnteredNameText(''); // Clear the input field
    setSavedName(''); // forget saved name
  };

  const addNameHandler = () => {
    setSavedName(enteredNameText);
  }

  function addBlockTypeHandler(enteredBlockType) {
    setBlockTypes(currentBlockTypes => [
      ...currentBlockTypes, 
      {text: enteredBlockType, id: Math.random().toString}
    ]);
  }
 

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
          {savedName !== '' && <Text style={styles.feedbackText}>{`Your name is... ${savedName}`}</Text>}
        </View>

        <BlockTypeInput onAddBlockType={addBlockTypeHandler} />

        <View style={styles.blockTypeList}>
          <FlatList 
            data={blockTypes} 
            renderItem={(itemData) => {
              return <BlockTypeItem text={itemData.item.text} />;
            }} 
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} 
          />
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