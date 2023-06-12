import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Entypo } from "@expo/vector-icons";

import { TweetType } from '../types';

import IconButton from '../components/IconButton';
import { Link } from 'expo-router';

type TweetProps = {
    tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {
    return (
      <Link href={{ pathname: `/tweet/${tweet.id}`, params: { tweet }}} asChild>
        <Pressable style={styles.container}>
          <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

          <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.name}>{tweet.user.name}</Text>
              <Text style={styles.username}>{tweet.user.username} ·2h</Text>
              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="gray"
                style={{ marginLeft: "auto" }}
              />
            </View>

            <Text style={styles.content}>{tweet.content}</Text>

            {/* making sure that tweet.image is true before container for image post is rendered */}
            {tweet.image && (
              <Image source={{ uri: tweet.image }} style={styles.image} />
            )}

            <View style={styles.footer}>
              {/* Comment IconButton */}
              <IconButton icon="comment" text={tweet.numberOfComments} />
              <IconButton icon="retweet" text={tweet.numberOfRetweets} />
              <IconButton icon="heart" text={tweet.numberOfLikes} />
              <IconButton icon="chart" text={tweet.impressions || 0} />
              <IconButton icon="share-apple" />
            </View>
          </View>
        </Pressable>
      </Link>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },

  //footer
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});

export default Tweet;