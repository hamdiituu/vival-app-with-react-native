import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Menu, Visval, Cart} from '../../icons';
import styles from './styles';
const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Menu height={18} width={19} />
      </TouchableOpacity>
      <Visval height={17} width={74} />
      <TouchableOpacity>
        <Cart height={28} width={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderBar;
