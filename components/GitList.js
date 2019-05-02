import React, { PureComponent } from 'react';
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import {Avatar,ListItem,Icon} from "react-native-elements";

export default class GitList extends PureComponent {
    state = {
        gitList: [],
        loading: true,
        page:1,
        isLoading:false,
    }

    async componentDidMount() {
        try {
            const gitApiCall = await fetch('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page='+this.state.page);
            const git = await gitApiCall.json();
            this.setState({gitList: git.items, loading: false,isLoading:false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    static renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.gitItemHeader}>{data.item.name}</Text>
                <Text style={styles.gitItemHeaderDesc}>{data.item.description}</Text>
                <View style={{flex:1,flexDirection: 'row',marginTop: 10}}>

                        <Avatar
                    size="small"
                    rounded
                    source={{ uri: data.item.owner.avatar_url }}


                />
                <Text style={{marginTop:10}}>  {data.item.owner.login}</Text>



                <View style={{flexDirection: 'row',marginLeft: 'auto',marginTop:10
                    }}>
                        <Icon
                            name='star'
                            size={18}
                        />
                         <Text style={styles.gitItemHeaderDesc}>{data.item.score}</Text>
                    </View>
                </View>




            </View>
        </TouchableOpacity>
    }
    //method to handle loading more page to 30th
    handleLoadMore= () => {
            this.setState(
                {
                    page: this.state.page +1,
                    isLoading:true
                },
            )
    }
    renderFooter= () =>{
        return (
            this.state.isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large"/>
            </View>: null
        )
    }
    render() {
        const { gitList, loading } = this.state;
        if(!loading) {
            return <FlatList
                data={gitList}
                renderItem={GitList.renderItem}
                keyExtractor={(item) => item.name}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0}
                ListFooterComponent={this.renderFooter}
            />
        } else {
            return <ActivityIndicator />
        }
    }
}