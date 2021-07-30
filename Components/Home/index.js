import React,{useContext} from 'react'
import { View, Text,FlatList,Image  } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {FirebaseContext} from "../../FirebaseContext";
import { useSelector } from 'react-redux';

const categories = [
    {
      id: "1",
      title: "Burgers",
    },
    {
      id: "2",
      title: "Kebabs",
    },
    {
      id: "3",
      title: "Salades",
    },
    {
    id: "4",
    title: "Boissons",
    },
    {
    id: "5",
    title: "Désserts",
    },
    {
    id: "6",
    title: "Autres",
    },
  ];

  const menus = [
    {
      id: "1",
      title:"Double Whopper",
      price: "9.90€",
    },
    {
      id: "2",
      title:"Double Whopper",
      price: "9.90€",
    },
    {
      id: "3",
      title:"Double Whopper",
      price: "9.90€",
    },
    {
        id: "4",
        title:"Double Whopper",
        price: "9.90€",    },
    {
        id: "5",
        title:"Double Whopper",
        price: "9.90€",    },
    {
        id: "6",
        title:"Double Whopper",
        price: "9.90€",    },
  ];


  const ItemCategories = ({ title }) => (

    <View style={styles.item}>

      <Text style={styles.title}>{title}</Text>

    </View>

  );

  const ItemMenus = ({ title,price }) => {

    const navigation = useNavigation();

    return (

      <View style={styles.itemMenus}>

          <Image 
          source = {require("../../images/4mini.png")}
          onPress={() => console.log("detail")}
          />

        <View style={styles.viewMenuInfos}>

          <View style={{backgroundColor:"white",flexDirection:"row"}}>

            <Text style={styles.menuName} onPress={() => navigation.navigate("Detail")}>{title}</Text>

            <Text>{"   "}</Text>

            <Icon
            name="plus"
            size={14}
            color="orange"
            style={{alignSelf:"flex-end"}}
            onPress={() => console.log("add panier")}
            />

          </View>


          <Text style={styles.menuPrice}>{price}</Text>

        </View>


      </View>
    )
    }; 


const index = () => {

   const navigation = useNavigation();

    const firebase = useContext(FirebaseContext);

    console.log(firebase);

    const {exemple} = useSelector(state => state);

    console.log(exemple);

    const renderItemCategories = ({ item }) => (
        <ItemCategories title={item.title} />
      );

      const renderItemMenus = ({ item }) => (
        <ItemMenus title={item.title} price={item.price}/>
      );
        
    return (

        <View style={styles.styleFirstView}>

            <View style={{backgroundColor:'white',alignItems:'flex-end',marginTop:10}}>

              <Icon
              name="user"
              size={24}
              color="orange"
              onPress={() => console.log("mon compte")}
              />

            </View>

            <View style={{marginTop:30}}>

                <Text style={{
                    fontSize:26,
                    fontWeight:'bold',
                    lineHeight:30,
                    fontStyle:'normal',
                    fontFamily:'Roboto',
                    color:'#434354'
                }}>Bonjour Yohan</Text>

                <Text> {'\n'} </Text>

                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    lineHeight:23,
                    fontStyle:'normal',
                    fontFamily:'Roboto',
                    color:'#6C6C81'
                }}> Que désirez-vous ?</Text>

                <Text> {'\n'} </Text>

                <View style={{backgroundColor:'white'}}>

                    <FlatList
                        data={categories}
                        renderItem={renderItemCategories}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />

                </View>

                <View style={{backgroundColor:"white",marginTop:20 }}>

                    <FlatList
                        data={menus}
                        renderItem={renderItemMenus}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />

                </View>

            </View>
   
        </View>
    )
}

export default index
