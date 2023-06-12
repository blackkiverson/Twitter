import { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Pressable, Text, SafeAreaView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {

    const [text, setText] = useState(""); //handling text post
    const router = useRouter();
    

    const onTweetPress = () => {
        console.warn('Posting the tweet ', text);

        setText('');
        router.back();
    };

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Link href="../" style={{ fontSize: 18 }}>
              Cancel
            </Link>

            <Pressable onPress={onTweetPress} style={styles.button}>
              <Text style={styles.buttonText}>Tweet</Text>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <TextInput
              value={text}
              onChangeText={(newValue) => setText(newValue)}
              placeholder="What's happening?"
              multiline
              numberOfLines={5}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0, //safeAreaPadding only applicable to ios11 or later
  },
  container: {
    padding: 10,
    flex: 1, //making entire screen white
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1DA1F2",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});