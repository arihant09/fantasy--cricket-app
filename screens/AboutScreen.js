import React from 'react';
import {View,StyleSheet,Text,Image,ImageBackground} from 'react-native';


const image = { uri: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" };
function AboutScreen(props) {
 return (
    
 <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}
      blurRadius={0.5}>
     <Image style={styles.logo} source={require('../assets/logo.png')}/>
<Text style={styles.text}>
HalaPlay is a Daily Fantasy Sports (DFS) platform that empowers serious and casual sports enthusiasts to play cash based quick, 
simple and interesting games. DFS is the shortest and quickest version of fantasy sports where users can create a team, 
enter leagues and win cash prizes at the end of every game. 
Yes! Every game! Now there is no need to wait for a season to get over to earn prizes.
{'\n'}
{'\n'}
Our aim is to increase sports fan engagement and improve viewership for sports by making matches interesting for our users.
{'\n'}
{'\n'}
We provide different types of leagues in all International, Domestic ODIS, T20s, Test matches in Cricket, English Primere League(EPL), La Liga, Champions Trophy, World Cup, Euro Cup, Copa America in Football and all Indian domestic leagues in Kabaddi.

</Text>
</ImageBackground>
 </View>

 );
}

const styles=StyleSheet.create({
container:{
    flex:1,
 
},
text:{
    marginTop:20,
    marginLeft:10,
 color:'white',
 fontSize:18,

},
logo:{
    top:-10,
    width:100,
    height:100,
    alignSelf:'center'
},
image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default AboutScreen;