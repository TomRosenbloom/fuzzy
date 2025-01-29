import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";


function BlockTypeInput(props) {
    const [enteredBlockType, setBlockTypeText] = useState('');

    function blockTypeInputHandler(enteredText) {
        setBlockTypeText(enteredText);
      }
    
    function addBlockTypeHandler() {
        props.onAddBlockType(enteredBlockType);
        setBlockTypeText('');
    }
  
    return (
        <View style={styles.blockType}>
            <TextInput
                style={styles.textInput}
                placeholder='Type name of block type'
                onChangeText={blockTypeInputHandler}
                value={enteredBlockType}
            />
            <Button title='Add' onPress={addBlockTypeHandler}/>
        </View>
    );
}

export default BlockTypeInput;

const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '60%',
      marginRight: 8,
      padding: 8
    }
  });