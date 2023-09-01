import { FlatList } from "react-native";
import CategoryItems from "./CategoryItems";

export default function Categories({commonCategories, setTerm, term}){
    return(
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
    );
}