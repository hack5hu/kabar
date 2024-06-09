import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mainNewsCategories} from '../../MockData/MockData';
import HeadlineNews from '../../Components/HeadlineNews/HeadlineNews';
import TreadingNews from '../../Components/TreadingNews/TreadingNews';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../../Redux/Reducers';
import {dataManagerApiRequest} from '../../DataManager/dataManager';
import { SearchBar } from 'react-native-screens';
import Searchbox from '../../Components/Searchbox/Searchbox';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    mainNewsCategories[0],
  );
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [treading, setTreading] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dataCalling();
  }, [selectedCategory]);

  const dataCalling = async (isLoadMore = false) => {
    try {
      const response = await dataManagerApiRequest({
        ...(selectedCategory !== 'All' && {category: selectedCategory}),
        page: isLoadMore ? page + 1 : 1,
      });

      if (response.data.articles.length !== 0) {
        if (selectedCategory === 'All') {
          setTreading(response.data.articles[0]);
        }
        setData(prevData =>
          isLoadMore
            ? [...prevData, ...response.data.articles]
            : response.data.articles,
        );
      } else {
        Alert.alert('No Data Found, check connection');
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setIsLoading(false);
    }
  };

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
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {isLoading && page === 1 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#1877F2" />
          </View>
        ) : (
          <>
            <Searchbox value={searchTerm} setTerm={setSearchTerm}/>
            <View>
              <View style={styles.headerRow}>
                <Text style={styles.sectionTitle}>Trending</Text>
                <Text style={styles.seeAll}>See all</Text>
              </View>
              <TreadingNews data={treading} />
            </View>
            <View style={styles.headerRow}>
              <Text
                style={styles.sectionTitle}
                onPress={() => dispatch(setIsLogin(false))}>
                Latest
              </Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
            <View>
              <FlatList
                data={mainNewsCategories}
                renderItem={({item}) => <CategoryItem title={item} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
              />
            </View>

            <FlatList
              data={data}
              renderItem={({item}) => <HeadlineNews data={item} />}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.newsList}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    margin: 24,
    flex:1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:8  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  seeAll: {
    fontSize: 14,
    color: '#1877F2',
  },
  categoryList: {
    // marginVertical: 10,
  },
  item: {
    marginBottom: 8,
    paddingVertical:8,
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    
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
  newsList: {
    flexGrow: 1, 
 },
});
