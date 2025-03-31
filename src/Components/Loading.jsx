import { ActivityIndicator } from "react-native"

export default function Loading({isLoading}){
    return isLoading?<ActivityIndicator size={40} color="white" />:null
}