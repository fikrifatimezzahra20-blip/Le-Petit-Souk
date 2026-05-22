import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.PS.png")}
        style={styles.logo}
    />
    
    <Text style={styles.city}>Beni Mallal</Text>
    
    <View style={styles.card}>
      <Text style={styles.description}>Bienvenue dans notre authentique restaurant marocain.Découvrez les saveurs traditionnelles de Beni Mellal.</Text>
    </View>


    <TouchableOpacity style={styles.button} onPress={() => router.push("/menu")}>
      <Text style={styles.buttonText}> Voir le Menu </Text>
    </TouchableOpacity>
 
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    backgroundColor:"#FFF8E7",
    justifyContent:"center",
    alignItems:"center",
  },
  logo: {
    width: 350,
    height: 270,
    resizeMode: "contain",
    marginBottom: 1.5,
    
  },
  city: {
    fontSize: 28,
    color:"#6B4226",
    fontFamily:"Snell Roundhand",
    marginBottom: 15,
  },
  card:{
    width: "90%",
    backgroundColor: "#F5E6D3",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#D4A373",
    padding: 25,
    marginBottom: 30,
  },
  description: {
    textAlign: "center",
    fontFamily: "Snell Roundhand",
    fontSize: 18,
    lineHeight: 30,
    color: "#222",
    fontWeight: "600",
  },
    button: {
    width: 240,
    backgroundColor: "#00FFBF",
    paddingVertical: 16,
    borderRadius: 40,
    alignItems: "center",
    elevation: 8,
  },

  buttonText: {
    fontFamily:"Snell Roundhand",
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },

});
