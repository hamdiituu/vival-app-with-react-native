import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Search} from '../../components/icons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput value="Bags" style={styles.searchInput} multiline={false} />
        <Search style={styles.searchIcon} widht={20} height={21} />
      </View>

      <ImageBackground
        style={styles.bannerWrapper}
        source={require('../../../assets/image/backpack-home.jpg')}>
        <LinearGradient
          style={styles.bannerImageGradient}
          colors={['white', 'black']}
        />
      </ImageBackground>
      <View style={styles.bannerTextWrapper}>
        <Text style={styles.bannerTitleText}>Visval</Text>
        <Text style={styles.bannerSubtitleText}>Backpack</Text>
      </View>

      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        <View style={styles.popularItemsWrapper}>
          <TouchableOpacity style={styles.popularItem}>
            <ImageBackground
              style={styles.popularItemImage}
              source={require('../../../assets/image/backpack-home-sub-1.jpg')}>
              <LinearGradient
                style={styles.popularImageGradient}
                colors={['white', 'black']}
              />
            </ImageBackground>

            <Text style={styles.popularItemPriceKey}>Rp.</Text>
            <Text style={styles.popularItemPriceValue}>263.200</Text>

            <Text style={styles.popularItemTitle}>DENVER DUFFLE BAG NAVY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularItem}>
            <ImageBackground
              style={styles.popularItemImage}
              source={require('../../../assets/image/backpack-home-sub-1.jpg')}>
              <LinearGradient
                style={styles.popularImageGradient}
                colors={['white', 'black']}
              />
            </ImageBackground>

            <Text style={styles.popularItemPriceKey}>Rp.</Text>
            <Text style={styles.popularItemPriceValue}>263.200</Text>

            <Text style={styles.popularItemTitle}>DENVER DUFFLE BAG NAVY</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

export default Home;
