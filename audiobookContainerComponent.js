import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AudioBookContainerComponent = () => {
  const audioBookList = [
    {
      title: "Mastering Conversation...",
      author: "Helen Stone",
    },
    {
      title: "Control your mind and...",
      author: "Eric Robertson",
    },
    {
      title: "Ikigai: The japanese sec...",
      author: "Hector Garcia",
    },
  ];
  return (
    <View style={styles.audiobooksContainer}>
      {audioBookList.map((book, idx) => (
        <TouchableOpacity key={idx} style={styles.audiobookCard}>
          <ImageBackground
            source={require("./assets/audiobook-icon.jpg")}
            style={styles.audiobookImage}
          />
          <Text style={styles.premiumText}>Included in Premium</Text>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  audiobooksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    paddingBottom: 40,
  },
  audiobookCard: {
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    marginBottom: 12,
  },
  audiobookImage: {
    aspectRatio: 1,
    borderRadius: 4,
  },
  premiumText: {
    color: "lightgreen",
    fontSize: 10,
    marginTop: 4,
    paddingLeft: 6,
    paddingBottom: 2,
  },
  bookTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 6,
    paddingBottom: 2,
  },
  bookAuthor: {
    color: "#bbb",
    fontSize: 10,
    paddingLeft: 6,
    paddingBottom: 6,
  },
});

export default AudioBookContainerComponent;
