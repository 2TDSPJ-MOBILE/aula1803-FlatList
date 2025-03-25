import { View,TextInput,StyleSheet,Text } from "react-native"
import {Ionicons} from 'react-native-vector-icons'

let textoPesquisado = ""

export default function Cabecalho({navigation,text,setText,solicitarDados}){
    return(
      <View>
         <View style={styles.cabecalho}>
                <Ionicons 
                  name="chevron-back" 
                  size={40}
                  color="white"  
                  onPress={()=>navigation.goBack()}
                />
                <TextInput 
                  style={styles.textInput}
                  placeholder='Digite sua pesquisa'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={text}
                  onChangeText={(value)=>setText(value)}
                  onSubmitEditing={()=>{
                    textoPesquisado=text;
                    solicitarDados(text)
                  }}
                />
                <Ionicons 
                  name="search"
                  size={40}
                  color='white'
                  onPress={()=>{
                    textoPesquisado=text;
                    solicitarDados(text)
                  }}
                />
              </View>
                  {textoPesquisado!==""?
                   <Text style={styles.white}>Mostrando resultado para <Text style={styles.whiteBold}>{textoPesquisado}</Text></Text>
                  :
                  null}
              </View>
    )
}

const styles = StyleSheet.create({
  cabecalho:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30
  },
  textInput:{
    backgroundColor:"white",
    width:300,
    borderRadius:10,
    paddingLeft:10
  },
  white:{
    fontSize:16,
    color:"white",
    marginLeft:10,
    marginTop:15
  },
  whiteBold:{
    fontSize:16,
    fontWeight:"bold",
    color:"white"
  }
});