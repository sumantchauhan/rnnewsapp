import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import axios from 'axios';
import {APK_KEY} from './constant';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsData:[]
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                if(res && res.data && res.data.length>0){
                    this.setState({newsData:res.data})
                }
            })
    }

    render() {
    return(
        <View style={styles.textStyle}>
           <Text style={{fontSize: 24}}>Welcome To News App</Text>
           {
               this.state.newsData && this.state.newsData.length>0 ?
               this.state.newsData.map((item,index) => (
                <View key={index}>
                  <View style={styles.newsItem}>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <View style={{marginTop:10}}>
                        <Text>{item.body} </Text>
                    </View>
                  </View>
                </View>
               ))
            :
            <View>
              <Text>No News Found</Text>
           </View>
           }
           
        </View>
    )
    }
}

export default Home;

const styles = StyleSheet.create({
    textStyle:{
        alignItems:'center',
        marginTop:10
    },
    newsItem:{
        padding:20,
        alignItems:'center',
        marginTop:10,
        borderWidth:2,
        marginLeft: 10,
        marginRight: 10
    },
    newsTitle:{
        fontSize:24,
        color:'black'
    }
})