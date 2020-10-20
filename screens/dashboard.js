import React from 'react';
import {View,StyleSheet,Text,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native';
const width = Dimensions.get('window').width;
import {
    UIActivityIndicator,
  } from 'react-native-indicators';
export default class Dashboard extends React.Component{
    state = {
        dataone : [],
        isloading : true
    }
    componentDidMount(){
       this.fetchdata();
    }
    fetchdata = () => {
        fetch('https://corona.lmao.ninja/v2/all')
        .then((response)=>response.json())
        .then((responsejson)=>{this.setState({
            dataone : responsejson,
            isloading : false
        })
        console.log(this.state.dataone)
    })
    }
    render(){
        var d = new Date(this.state.dataone.updated)
        if(this.state.isloading){
            return(
                    <View style={styles.container}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/one.jpg')} style={{width:width,height:200,borderBottomRightRadius:44,borderBottomLeftRadius:44}}/>
                        </View>
                        <View style={styles.header}>
                            <Text style={{fontSize:22,fontWeight:'bold'}}>Covid-19 Tracker</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
                            <UIActivityIndicator color="blue" size={30}/>
                        </View>
                    </View>
            );
        }
        else
        {
            return(
                <View style={styles.container}>
                    <View style={styles.imageview}>
                        <Image source={require('../assets/one.jpg')} style={{width:width,height:200,borderBottomRightRadius:44,borderBottomLeftRadius:44}}/>
                    </View>
                    <View style={styles.header}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>Covid-19 Tracker</Text>
                        <Text style={{marginTop:8,color:'rgba(0, 0, 0, 0.5)',fontSize:14}}>Updated as on {d.toDateString()}</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/confirmed.png')} style={{width:35,height:35}}/>
                            <Text style={[styles.numbers,{color:'red'}]}>{this.state.dataone.cases}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/deaths.png')} style={{width:40,height:40}}/>
                            <Text style={[styles.numbers,{color:'grey'}]}>{this.state.dataone.deaths}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/recovered.png')} style={{width:35,height:35}}/>
                            <Text style={[styles.numbers,{color:'#2F0DFF'}]}>{this.state.dataone.recovered}</Text>
                        </View>
                    </View>
                    <View style={{height:50,width:330,alignSelf:'center',top:60,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems:'center',justifyContent : 'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Graph')}>
                                <Text style={styles.mostheader}>View ThingSpeak Graph</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent : 'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Viewall')}>
                                <Text style={{color:'blue',fontSize:14}}>View All Countries</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    imageview : {
        width : width,
        height : 200,
        top : 0,
        borderBottomLeftRadius : 44,
        borderBottomRightRadius : 44
    },
    header : {
        top : 25,
        left : 30
    },
    card : {
        width : width-50,
        height : 100,
        backgroundColor : '#fdfdfd',
        alignSelf : 'center',
        top : 50,
        elevation : 2,
        flexDirection : 'row'
    },
    numbers : {
        marginTop : 20,
        fontWeight:'bold',
        fontSize:15
    },
    most : {
        height:200,
        top : 60,
    },
    mostheader : {
        fontSize : 14,
        color : 'blue'
    }
})