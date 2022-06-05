import React from 'react';
import {View, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
const messages = [
    {
        id:1,
        title: 'Hello',
        description: 'Description 1',
        image: require('../assets/user.png')
    },
    {
        id:2,
        title: 'Hello',
        description: 'Description 2',
        image: require('../assets/user.png')
    },
    {
        id:3,
        title: 'Hello',
        description: 'Description 3',
        image: require('../assets/user.png')
    },
]
function MessageScreen(props) {
    return (
        <Screen>
            <FlatList data={messages} 
                keyExtractor={message => message.id.toString()} 
                renderItem={({item}) => (<ListItem title={item.title} subtitle={item.description} image={item.image}/>)}
                ItemSeparatorComponent = {ListItemSeperator}
                >   
            </FlatList>
        </Screen>
    );
}
export default MessageScreen;