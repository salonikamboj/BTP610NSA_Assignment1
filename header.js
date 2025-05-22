import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("./assets/apple-icon.png")}
        style={styles.appleIcon}
      />
      <View style={styles.tabs}>
        <TouchableOpacity>
          <Text style={[styles.tab, styles.activeTab]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tab}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tab}>Podcasts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tab}>Audiobooks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  appleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  tabs: {
    flexDirection: "row",
    gap: 8,
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 12,
    fontSize: 12,
  },
  activeTab: {
    backgroundColor: "green",
  },
});

export default Header;