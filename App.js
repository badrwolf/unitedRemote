import React from 'react';
import { Text, StyleSheet, ScrollView,View } from 'react-native';
import GitList from './components/GitList';
const App = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.gitListHeader}>
            <Text style={{marginTop: 20,fontSize: 20,
                color: 'black',textAlign:'center'}}>Trending Repos</Text>
            </View>
            <GitList/>
        </ScrollView>
    )
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    gitListHeader: {
        fontSize: 20,
        color: 'black',
        textAlign:'center',
        backgroundColor: '#F5F5F5',

        width:400,
        height:80
    }
});