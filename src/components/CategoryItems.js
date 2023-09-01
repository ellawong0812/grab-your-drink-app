import {StyleSheet,Text, View,Image, Button, TouchableOpacity} from "react-native";
import {elevation} from "../common/styles";

export default function CategoryItems({name, imageUrl,active, handlePress}){
    return(
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.container, 
            styles.elevation,
             active?{backgroundColor:"rgb(241,186,67)"}:{backgroundColor:"white"}, 
            ]}
              >

            <View>
                <Image source={imageUrl} style={styles.image} />
                

            </View>

          
            <Text style={styles.words}>{name}</Text>
        </View>
        </TouchableOpacity>

    )
}

const styles=StyleSheet.create({
    container:{
        width: 100,
        height:100,
        borderRadius:50,
        marginVertical: 15,
        marginHorizontal:25,
        backgroundColor:"rgb(50,100,50)",
        alignItems:"center",
        justifyContent:"center",
    },
    elevation,
    image:{
        width:45,
        height:65,
        borderRadius:30,
    },
    words:{
        backgroundColor:"white",
        fontWeight:"bold"
    },
});