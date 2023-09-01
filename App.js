import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image,ScrollView} from 'react-native';
import CategoryItems from './src/components/CategoryItems';
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Logo from "./src/components/Logo";
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';

export default function App() {
  
  // const term = "Bubble tea"
  const[term, setTerm ]=useState("Bubble tea");
  const commonCategories=[
    {
      
      name: "Bubble tea",
      imageUrl: require("./src/assets/images/bubbletea.png")
    },
    {
      name: "Coffee",
      imageUrl: require("./src/assets/images/coffee.png")
    },
    {
      name: "Matcha",
      imageUrl: require("./src/assets/images/matcha.png")
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
      
      <Search setTerm={setTerm}/>
      <CategoryItems />
      <CategoryItems />
      
      <Categories categories={commonCategories}
      setTerm={setTerm} term={term}
      />
     
      <FlatList 
      data={commonCategories} 
      renderItem={({item}) => {
        return <CategoryItems
        name={item.name}
        imageUrl={item.imageUrl} 
        active={item.name===term}
        handlePress={() => setTerm(item.name)}
        />;
      }}
      horizontal
      keyExtractor={(category) => category.name}
       />
      
      <Logo />
    <View>
      
    </View>
    <Restaurants />
  
      <StatusBar />
      </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
