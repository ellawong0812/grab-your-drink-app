import { View, Image, StyleSheet, TouchableOpacity} from "react-native";
export default function logo() {
    return (
        <View >
            <TouchableOpacity>
                <Image source={require("../assets/images/rilakkuma.png")}
                    style={styles.image} />
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({

    image: {

        marginHorizontal: 255,
        width: 100,
        height: 100,
    },
});