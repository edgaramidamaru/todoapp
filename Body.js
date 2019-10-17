import React,{Component} from 'react';
import { StyleSheet, Text, View,FlatList,ActivityIndicator } from 'react-native';
import Tarea from './Tarea';
class Body extends Component{
  render(){
  return (
    <View style={styles.container}>
      {this.props.cargando&&
      <ActivityIndicator
        size='large'
        color='#323232'/>}
{!this.props.cargando&&<FlatList
        data={this.props.tareas}
        renderItem={({item})=><Tarea item={item}eliminar={this.props.eliminar}/>
    }
      />}
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#B2BABB',

  },
});
export default Body;
