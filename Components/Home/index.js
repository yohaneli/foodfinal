import React,{useContext,useEffect,useState} from 'react'
import { View, Text,FlatList,Image  } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {FirebaseContext} from "../../FirebaseContext";
import { useSelector,useDispatch } from 'react-redux';
import { lireListeCategories } from '../../Redux/Actions/categories';

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
  
  const ItemCategoriesF = ({ name }) => (

    <View style={styles.item}>

      <Text style={styles.title}>{name}</Text>

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

   const [afficheCategories, setAfficheCategories] = useState(null);

    const {queryCategories} = useContext(FirebaseContext);

    const {categories} = useSelector(state => state);

    console.log(categories);

    const dispatchCategories = useDispatch();

    const listeCategories = () => queryCategories().onSnapshot((snapshot) => {

      // console.log(snapshot);

      let templistCategories = [];

      if(snapshot && !snapshot.empty){

        snapshot.forEach(element =>{

          //console.log(element.data().name);

          templistCategories.push(element.data());

        })

        setAfficheCategories(templistCategories);

        if(afficheCategories) {

          dispatchCategories(lireListeCategories(templistCategories));

        }

      }

    });
    
      const renderItemCategoriesF = ({ item }) => (
        <ItemCategoriesF name={item.name} />
      );

      const renderItemMenus = ({ item }) => (
        <ItemMenus title={item.title} price={item.price}/>
      );
     
      useEffect(() => {
        const cleanup2 =listeCategories();
        return () => {
          cleanup2;
        }
    },[])  
        
    return (

        <View style={styles.styleFirstView}>

            <View style={{backgroundColor:'white',alignItems:'flex-end',marginTop:10}}>

              <Icon
              name="user"
              size={24}
              color="orange"
              onPress={() => navigation.navigate("MonCompte")}
              />

            </View>

            <View style={{marginTop:30}}>

                <Text style={{
                    fontSize:26,
                    fontWeight:'bold',
                    lineHeight:30,
                    fontStyle:'normal',
                    fontFamily:'Roboto',
                    color:'#434354',
                }}>Bonjour</Text>

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
                        data={afficheCategories}
                        renderItem={renderItemCategoriesF}
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
