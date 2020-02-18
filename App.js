import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
	<FlatList
	  ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
	      <View style={[style.separator, highlighted && {marginLeft: 0}]} />
	  )}
	data={[{title: 'Title Text', key: 'item1'}]}
	renderItem={({item, separators}) => (
	    <TouchableHighlight
	      onPress={() => this._onPress(item)}
	      onShowUnderlay={separators.highlight}
	      onHideUnderlay={separators.unhighlight}>
	      <View style={{backgroundColor: 'white'}}>
		<Text>{item.title}</Text>
	      </View>
	    </TouchableHighlight>
	)}
	    />

    );

    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    
},
});
