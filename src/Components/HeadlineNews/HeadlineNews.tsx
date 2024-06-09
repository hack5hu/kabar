import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { getTimeAgo } from '../../Helper/helper';

const HeadlineNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Assets/Images/Vector.png')}
          height={96}
          width={96}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.category}>Europe</Text>

        <View style={styles.descriptionContainer}>
          <Text numberOfLines={2} style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.sourceInfo}>
            <Text style={styles.source}>BBC_news</Text>
            <Image
              source={require('../../Assets/Images/Vector.png')}
              height={96}
              width={96}
              
            />
            <Text style={styles.time}>
              {getTimeAgo('2024-06-08T06:08:47Z')}
            </Text>
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
    borderRadius:6,
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
    width: 264,
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
