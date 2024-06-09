import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getTimeAgo} from '../../Helper/helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NewsData } from '../../Constants/Type';

const TreadingNews = ({data}:NewsData) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: data?.urlToImage}} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.category}>India</Text>

        <View style={styles.descriptionContainer}>
          <Text numberOfLines={1} style={styles.description}>
            {data?.title}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.sourceInfo}>
            <Text style={styles.source}>{data?.source?.name}</Text>
            <Icon name={'clock-time-three-outline'} style={styles.icon} />
            {/* //clock-time-three-outline */}
            <Text style={styles.time}>{getTimeAgo(data?.publishedAt)}</Text>
          </View>
          <Icon name={'dots-horizontal'} style={styles.icon} size={13} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 6,
    gap: 4,
    height: 279,
  },
  imageContainer: {
    flex: 0.8,
  },
  image: {
    borderRadius: 6,
    height: 183,
    // width: 364,
    width: '100%',
  },
  textContainer: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  category: {
    flex: 1,
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
  },
  descriptionContainer: {
    flex: 1,
    height: 48,
    // width: 264,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    width:'100%'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {marginLeft: 2},
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

export default TreadingNews;
