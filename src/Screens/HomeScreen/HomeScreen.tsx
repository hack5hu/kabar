import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {mainNewsCategories} from '../../MockData/MockData';
import HeadlineNews from '../../Components/HeadlineNews/HeadlineNews';
import TreadingNews from '../../Components/TreadingNews/TreadingNews';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../../Redux/Reducers';
import {dataManagerApiRequest} from '../../DataManager/dataManager';
import Searchbox from '../../Components/Searchbox/Searchbox';

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    mainNewsCategories[0],
  );
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [treading, setTreading] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dataCalling();
  }, [selectedCategory]);

  const dataCalling = async (isLoadMore: boolean = false) => {
    try {
      const response = await dataManagerApiRequest({
        ...(selectedCategory !== 'All' && {category: selectedCategory}),
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

  const ViceHeader = ({title, subTitle}: {title: string; subTitle: string}) => {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.seeAll}>{subTitle}</Text>
      </View>
    );
  };

  const CategoryItem = ({title}: {title: string}) => (
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
            <View style={styles.headerContainer}>
              <Image
                source={require('../../Assets/Images/kabar.png')}
                style={styles.logo}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => dispatch(setIsLogin(false))}>
                <Image
                  source={require('../../Assets/Images/bell.png')}
                  style={styles.bellIcon}
                />
              </TouchableOpacity>
            </View>
            <Searchbox value={searchTerm} setTerm={setSearchTerm} />

            <View>
              <ViceHeader title={'Treading'} subTitle={'See all'} />
              <TreadingNews data={treading} />
            </View>

            <ViceHeader title={'Latest'} subTitle={'See all'} />

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
    marginHorizontal: 24,
    // marginVertical:16,
    flex: 1,
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
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#4E4B66',
  },
  categoryList: {
    // marginVertical: 10,
  },
  item: {
    marginBottom: 8,
    paddingVertical: 8,
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
    height:24
  },
  selectedTitle: {
    color: 'black',
  },
  newsList: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    marginBottom: 16,
  },
  logo: {
    width: 99,
    height: 30,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    width: 18,
    height: 21.5,
  },
});
