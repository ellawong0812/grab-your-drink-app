import { FlatList, StyleSheet, Text, View } from "react-native";


export default function Restaurants(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                Top Shop
            </Text>
            

        </View>
    );
}

const styles=StyleSheet.create(
    {
        container:{
            marginHorizontal:25,
            marginVertical:15,
            flex:1,
        },
        header:{
            fontWeight:"bold",
            fontSize:10,
            paddingBottom:10,
            height:100,

        },
         
    }
);