import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {mainNewsCategories} from '../../MockData/MockData';
import HeadlineNews from '../../Components/HeadlineNews/HeadlineNews';
import TreadingNews from '../../Components/TreadingNews/TreadingNews';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    mainNewsCategories[0],
  );

  const CategoryItem = ({title}) => (
    <TouchableOpacity onPress={() => setSelectedCategory(title)}>
      <View
        style={[
          styles.item,
          selectedCategory === title && styles.selectedItem,
        ]}>
        <Text
          style={[
            styles.title,
            selectedCategory === title && styles.selectedTitle,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{margin: 24}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.12,
              }}>
              Treading
            </Text>
            <Text>See all</Text>
          </View>
          <TreadingNews/>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 24,
              letterSpacing: 0.12,
            }}>
            Latest
          </Text>
          <Text>See all</Text>
        </View>
        <FlatList
          data={mainNewsCategories}
          renderItem={({item}) => <CategoryItem title={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <HeadlineNews />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 14,
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    borderBottomColor: 'transparent',
    flexWrap: 'wrap',
  },
  selectedItem: {
    borderBottomColor: '#1877F2',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  selectedTitle: {
    color: 'black',
  },
});
