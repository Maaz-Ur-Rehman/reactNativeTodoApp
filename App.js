/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
const Colors={primary:'#1f145c'}


function App(){
  const [list,setList]=useState([])
    const [text,setText]=useState('')


  const add=()=>{
    setList([...list,text])
    setText('')
  }
  const del=i=>{
    list.splice(i,1)
    setList([...list])
  }

  const delAll=()=>{
    setList([])
  }
  // const edit=e=>{
  //   // setText()
  //   console.log(e)
  //   //  setText(text[i])
  // }
    return (
      <View>
    
      <View style={styles.header}>
        <Text style={{fontWeight:'bold',fontSize:20, color: Colors.primary}}  >
          Todo App
        </Text>
        <Icon name='delete' size={25} color='red' onPress={delAll}/>
        {/* <FlatList data={todos} /> */}
          {/* <TextInput placeholder='Enter Todo' onChangeText={(e)=>setText(e)} />
          <Button title='Add' color='blue' onPress={add}></Button> */}
      </View>
      <View >
          <View>
          {list.map((x,i)=><View style={styles.mid} key={i}>
            <View>
    
              <Text>{x}</Text>
            </View>
            <View style={styles.midInput}>
    
            <Icon name='edit' size={20} color='blue'  style={{paddingHorizontal:10}}  />
          <Icon name='delete' size={20} color='red' onPress={()=>del(i)} />
            </View>
    </View>
            
          )}
    
          </View>
         
      </View>
    
    
         <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder='Enter Todo' value={text} onChangeText={(e)=>setText(e)} />
          </View>
          <TouchableOpacity>
            <View style={styles.iconContainer} >
            {/* <Icon name='add' color='white' onPress={add} /> */}
            <Icon name='add' color='white' size={20} onPress={add} />
            </View>
          </TouchableOpacity>
         </View>
          </View>
    )
     
    
    
    }
    const styles=StyleSheet.create({
      header:{
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      footer:{
        position:'absolute',
        top:650,
        // bottom:0,
        color:Colors.primary,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    
      },
    
      mid:{
        elevation:40,
        paddingLeft:20,
        paddingRight:10,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        // height:'15%',
        
        backgroundColor:'#fff',
        marginVertical:10,
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
      },
      midInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:10
      },
      inputContainer:{
        elevation:40,
        backgroundColor:'#fff',
        flex:1,
        height:50,
        marginVertical:20,
        marginRight:20,
        borderRadius:30,
        paddingHorizontal:20,
      },
      iconContainer:{
        width:50,
        height:50,
        backgroundColor:Colors.primary,
        borderRadius:25,
        elevation:40,
        justifyContent:'center',
        alignItems:'center'
      }
    })

      
  

export default App;
