import { View, Text, StyleSheet } from "react-native";

function BlockTypeItem(props) {
    return (
       <View style={styles.blockTypeItem}>
            <Text style={styles.blockTypeText}>{props.text}</Text>
        </View>   
    );  
};

export default BlockTypeItem;

const styles = StyleSheet.create({
    blockTypeItem: {
        margin: 8,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#5e0acc',
      },
      blockTypeText: {
        color: 'white'
      },
    
});