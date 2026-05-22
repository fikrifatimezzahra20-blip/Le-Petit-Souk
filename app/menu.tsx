import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,} from "react-native";
import { router } from "expo-router";

export default function MenuScreen() {

  const menu = [
    {
      id: 1,
      price: "55 MAD",
      image: require("../assets/images/TPC.PC.png"),
    },
    {
      id: 2,
      price: "65 MAD",
      image: require("../assets/images/CR.PC.png"),
      note: "Disponible le vendredi",
    },
    {
      id: 3,
      price: "20 MAD",
      image: require("../assets/images/HAC.PC.png"),
    },
    {
      id: 4,
      price: "45 MAD",
      image: require("../assets/images/PP.PC.png"),
    },
    {
      id: 5,
      price: "12 MAD",
      image: require("../assets/images/TM.BS.png"),
    },
    {
      id: 6,
      price: "18 MAD",
      image: require("../assets/images/JOF.BS.png"),
    },
    {
      id: 7,
      price: "15 MAD",
      image: require("../assets/images/pt.d.png"),
    },
  ];

   return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/")}
        >
          <Text style={styles.backArrow}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Menu du Jour
        </Text>
      </View>

      <View style={styles.logoSection}>
        <View style={styles.line} />

        <Image
          source={require("../assets/images/mini.logo.PS.png")}
          style={styles.logo}
        />

        <View style={styles.line} />
      </View>

      <Text style={styles.subtitle}> Saveurs authentiques de Beni Mellal </Text>

      <View style={styles.menuCard}>
        {menu.map((item) => (
          <View key={item.id} style={styles.foodCard}>
            
            <Image
              source={item.image}
              style={styles.foodImage}
              resizeMode="contain"
            />

            {item.note && (
              <Text style={styles.note}>
                {item.note}
              </Text>
            )}

            <TouchableOpacity
              style={styles.priceButton}
            >
              <Text style={styles.priceText}>
                {item.price}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}> Tous nos plats sont préparés avec des ingrédients frais et locaux </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E7",
  },

  header: {
    backgroundColor: "#6B4226",
    paddingTop: 55,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  backArrow: {
    fontSize: 28,
    color: "#000",
    marginRight: 20,
  },

  title: {
    fontSize: 36,
    color: "#FFF8E7",
    fontFamily: "Snell Roundhand",

  },

  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  line: {
    width: 95,
    height: 1,
    backgroundColor: "#6B4226",
  },

  logo: {
    width: 150,
    height: 90,
    marginHorizontal: 15,
    resizeMode: "contain",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 22,
    color: "#222",
    marginBottom: 20,
    fontFamily: "Snell Roundhand",
  },

  menuCard: {
    marginHorizontal: 20,
    backgroundColor: "#F5E6D3",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#D4A373",
    padding: 15,
  },

  foodCard: {
    backgroundColor: "#FFF8E7",
    borderRadius: 20,
    marginBottom: 18,
    padding: 15,
    alignItems: "center",
  },

  foodImage: {
    width: "100%",
    height: 180,
  },

  note: {
    color: "#B22222",
    fontFamily:"Snell Roundhand",
    fontSize: 17,
    marginTop: 8,
    textAlign: "center",
    fontWeight: "600",
  },

  priceButton: {
    backgroundColor: "#00FFBF",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },

  priceText: {
    fontFamily:"Snell Roundhand",
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },

  footer: {
    margin: 20,
    backgroundColor: "#F5E6D3",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  footerText: {
    textAlign: "center",
    color: "#556B2F",
    fontFamily: "Snell Roundhand",
    fontSize: 18,
  },
});