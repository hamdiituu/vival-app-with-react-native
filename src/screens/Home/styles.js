import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import * as Colors from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  searchWrapper: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.86,
    marginHorizontal: width * 0.07,
    backgroundColor: Colors.WHITE,
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderRadius: 24,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    zIndex: 999,
  },
  searchInput: {
    width: '80%',
    height: 23,
    backgroundColor: Colors.WHITE,
    fontSize: 20,
    fontWeight: '200',
  },
  searchIcon: {},
  bannerWrapper: {
    height: height * 0.5,
    marginTop: -25,
  },
  bannerImageGradient: {
    flex: 1,
    opacity: 0.3,
  },
  bannerTextWrapper: {
    position: 'absolute',
    top: height * 0.38,
    left: width * 0.1,
  },
  bannerTitleText: {
    color: Colors.WHITE,
    fontSize: 35,
    fontWeight: '700',
  },
  bannerSubtitleText: {
    color: Colors.WHITE,
    fontSize: 50,
    fontWeight: '500',
  },
  popularWrapper: {
    marginHorizontal: width * 0.08,
    marginVertical: width * 0.03,
  },
  popularTitle: {
    color: Colors.BLUE,
    fontSize: 27,
    fontWeight: '600',
  },
  popularItemsWrapper: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItem: {
    width: width * 0.4,
    height: width * 0.3,
  },
  popularItemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  popularImageGradient: {
    flex: 1,
    opacity: 0.3,
    borderRadius: 18,
  },
  popularItemPriceKey: {
    color: Colors.SALEYELLOW,
    fontSize: 16,
    fontWeight: '600',
    marginTop: -45,
    marginLeft: 10,
  },
  popularItemPriceValue: {
    color: Colors.WHITE,
    fontSize: 25,
    fontWeight: '600',
    marginTop: -5,
    marginLeft: 35,
  },
  popularItemTitle: {
    width: width * 0.4,
    textAlign: 'center',
    marginLeft: width * 0.007,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.BLUE,
  },
});

export default styles;
