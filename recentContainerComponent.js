import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RecentContainerComponent = () => {
  const recentList = [
    "Pop mix",
    "Hot Hits",
    "Upbeat Mix",
    "Daily Wellness",
    "Hip-Hop Central",
    "80s Hard Rock",
  ];
  return (
    <View style={styles.recentContainer}>
      {recentList.map((title, idx) => (
        <TouchableOpacity key={idx} style={styles.recentTile}>
          <ImageBackground
            source={require("./assets/recents-music-icon.jpg")}
            style={styles.recentImage}
          >
            <Text style={styles.recentTitle}>{title}</Text>
          </ImageBackground>
          <Text style={styles.recentSubtitle}>Playlist User 1</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  recentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
  },
  recentTile: {
    width: "30%",
    backgroundColor: "#222",
    paddingBottom: 8,
    marginBottom: 12,
  },
  recentImage: {
    aspectRatio: 1,
    borderRadius: 4,
  },
  recentTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#0000004D",
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  recentSubtitle: {
    color: "#ccc",
    fontSize: 10,
    marginTop: 4,
    paddingLeft: 6,
    paddingBottom: 2,
    fontSize: 12,
  },
});

export default RecentContainerComponent;
