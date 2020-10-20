import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Graph extends React.Component{
    state = {
        data : [],
        tableHead: ['Day', 'Distance'],
        tableData: []
    }
    componentDidMount(){
        fetch('https://api.thingspeak.com/channels/1122023/feeds.json?api_key=IH2GTU8MU422TXIW&results=100')
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                data : response.feeds
            })
        })
    }
    refresh = () => {
        this.componentDidMount()
    }
    render(){
        var list = []
        var date = []
        var len = this.state.data.length
        for(var i=0;i<len;i++){
            list.push(Number(this.state.data[i].field1))
            var d = new Date(this.state.data[i].created_at)
            if(d.getDay() == 0){
                date.push("Sunday")
            }
            else if(d.getDay() == 1){
                date.push("Monday")
            }
            else if(d.getDay() == 2){
                date.push("Tuesday")
            }
            else if(d.getDay() == 3){
                date.push("Wednesday")
            }
            else if(d.getDay() == 4){
                date.push("Thursday")
            }
            else if(d.getDay() == 5){
                date.push("Friday")
            }
            else{
                date.push("Saturday")
            }
        }
        for(var i=0;i<list.length;i++){
            this.state.tableData.push([date[i],list[i]])
        }
        console.log(date)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.refresh()}>
                    <Text style={{alignSelf:'center',color:'blue',fontWeight:'bold',marginBottom:10,fontSize:20}}>Refresh</Text>
                </TouchableOpacity>
                <ScrollView style={{flex:1}}>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={this.state.tableData} textStyle={styles.text}/>
                    </Table>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 15
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
})