import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GridComponent= ()=>{
    return (
    <View style={styles.grid}>
        {[
          "Hot Hits Canada",
          "Pop Favourites",
          "Hip-Hop Central",
          "80s Hard Rock",
          "All About Country",
          "Upbeat mix",
          "Daily Wellness",
          "Release Radar",
        ].map((title, idx) => (
          <TouchableOpacity key={idx} style={styles.tile}>
            <Image
              source={require("./assets/music-icon.jpg")}
              style={styles.tileIcon}
            />
            <Text style={styles.tileText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tile: {
    backgroundColor: "#333",
    width: "47%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
  },
  tileIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 4,
  },
  tileText: {
    color: "#fff",
    fontSize: 14,
  },

});

export default GridComponent;