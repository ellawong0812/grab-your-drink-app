import { Text, View, StyleSheet, Image } from "react-native"


export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row"}}>
                <Text style={styles.lightheader}>Grab your</Text>
                <Image source={require("../assets/images/rilakkuma.png")} style={styles.image} />
            </View>
            <Text style={styles.boldheader}>drink! !</Text>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 35,
        backgroundColor:"papayawhip"

    },

    lightheader: {
        fontSize: 60,

    },
    boldheader: {
        fontSize: 45,
        fontWeight: "bold",

    },
    image: {

        width: 100,
        height: 100,
    },
});