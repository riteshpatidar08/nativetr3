import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    icon: 'person',
  },
  {
    id: '2',
    title: 'Second Item',
    icon: 'person',
  },
  {
    id: '3',
    title: 'Third Item',
    icon: 'person',
  },
];
const Item = ({ title, icon }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Icons name={icon} size={30} />
  </View>
);

const ProfileScreen = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} icon={item.icon} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E1A551FF',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    margin: 30,
  },
});

export default ProfileScreen;
