import { Text,ImageBackground,StyleSheet } from "react-native"


export default function TelaDetalhes(){
    return(
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})