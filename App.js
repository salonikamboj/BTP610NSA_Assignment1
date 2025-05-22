import { ScrollView, StyleSheet, Text } from "react-native";
import GridComponent from "./gridComponent";
import Header from "./header";
import RecentContainerComponent from "./recentContainerComponent";
import AudioBookContainerComponent from "./audiobookContainerComponent";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <GridComponent />

      <Text style={styles.sectionTitle}>Recents</Text>
      <RecentContainerComponent />

      <Text style={styles.sectionTitle}>Audiobooks for you</Text>
      <AudioBookContainerComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 15,
    paddingTop: 40,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 30,
  },
});
