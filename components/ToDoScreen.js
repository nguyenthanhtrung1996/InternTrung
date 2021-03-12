import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

function ToDoScreen(props){
    const { toDoList, activeId, handlerSubmitInput, handlerOnClickItem } = props;
    const [ term, setTerm ] = useState();
    const Term = useRef('');
    return (

        <View style={styles.container}>
            <Text style={styles.title}>ToDoApp</Text>
            <View style={styles.formInput}>
                <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex:1 }}
                onChangeText={(text) => setTerm(text)}
                value={term}
                />
                <Button title={'Add'} onPress={()=>{
                    handlerSubmitInput(term);
                    setTerm('');
                }}/>
             </View>
             <View>
                {toDoList.map(function(item){
                    
                    return <Text style={styles.content} onPress={() => handlerOnClickItem(item)}>{item}</Text>
                })}
            </View>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({
    formInput:{
        flexDirection: 'row',
    },
    title:{
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '50%',
        backgroundColor: '#fff'
    },
    input: {

    },
    content: {

    }
})