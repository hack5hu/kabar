import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { getTimeAgo } from '../../Helper/helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NewsData } from '../../Constants/Type';

const HeadlineNews = ({data}:NewsData) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: data?.urlToImage}} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.category}>India</Text>

        <View style={styles.descriptionContainer}>
          <Text numberOfLines={2} style={styles.description}>
            {data?.title}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.sourceInfo}>
            <Text style={styles.source}>{data?.source?.name}</Text>
            <Icon name={'clock-time-three-outline'} style={styles.icon} />
            <Text style={styles.time}>{getTimeAgo(data?.publishedAt)}</Text>
          </View>
          <Text style={styles.more}>...</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 6,
    gap: 4,
    height: 112,
    width: 360,
  },
  imageContainer: {
    flex: 0.3,
  },
  image: {
    borderRadius: 6,
    height: 96,
    width: 96,
  },
  textContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  category: {
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
  },
  descriptionContainer: {
    flex: 1,
    height: 48,
    width: 264,
  },
  description: {
    height: 48,
    width: "85%",
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {marginLeft: 8},
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  source: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    marginRight: 5,
  },
  time: {
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    paddingLeft: 5,
  },
  more: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});

export default HeadlineNews;
