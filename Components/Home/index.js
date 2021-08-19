import React,{useContext,useEffect,useState} from 'react'
import { View, Text,FlatList,Image,TouchableHighlight  } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import { FirebaseContext } from "../../FirebaseContext";
import { useSelector,useDispatch } from 'react-redux';
import { lireListeCategories } from '../../Redux/Actions/categories';
import { lireListeProduits } from '../../Redux/Actions/produits';


  
  const ItemCategoriesF = ({ name }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
      </View>

  );

    const ItemProduits = ({ name,prix }) => {
  
      return (
  
        <View style={styles.itemMenus}>
            <Image 
            source = {require("../../images/4mini.png")}
            />
          <View style={styles.viewMenuInfos}>
            <View style={{backgroundColor:"white",flexDirection:"row"}}>
              <Text style={styles.menuName}>{name}</Text>
              <Text>{"   "}</Text>
              <Icon
              name="plus"
              size={14}
              color="orange"
              style={{alignSelf:"flex-end"}}
              onPress={() => console.log("add panier")}
              />
            </View>
            <Text style={styles.menuPrice}>{prix} €</Text>
          </View>
        </View>
      )
      };


const index = () => {

    const navigation = useNavigation();

    const [afficheCategories, setAfficheCategories] = useState(null);

    const [afficheProduits, setAfficheProduits] = useState(null)

    const {queryCategories,queryProduits} = useContext(FirebaseContext);

    const {categories,produits} = useSelector(state => state);
    //console.log(produits)
    const dispatchCategories = useDispatch();
    const dispatchProduits = useDispatch();

    //fonction qui va lister les categories et les dispatch dans redux

    const listeCategories = () => queryCategories().orderBy("date").onSnapshot((snapshot) => {
      // console.log(snapshot);
      let tempListCategories = [];

      if(snapshot && !snapshot.empty){

        snapshot.forEach(element =>{

          const newData = {id:element.id,...element.data()}

          tempListCategories.push(newData);

        })

        setAfficheCategories(tempListCategories);

        if(afficheCategories) {

          dispatchCategories(lireListeCategories(tempListCategories));
          //console.log("Liste des catégories : ",afficheCategories);

        }

      }

    });

      //fonction qui va lister les produits et les dispatch dans redux

    const listeProduits = () => queryProduits().onSnapshot((snapshot) => {
      let templistProduits = [];

      if(snapshot && !snapshot.empty){

        snapshot.forEach(element =>{

          const newData = {id:element.id,...element.data()}

          templistProduits.push(newData);

        })

        setAfficheProduits(templistProduits);

        if(afficheProduits) {

          dispatchProduits(lireListeProduits(templistProduits));

          //console.log("Liste des produits : ",afficheProduits)

        }

      }

    });

  const renderItemCategoriesF = ({ item }) => (
    <ItemCategoriesF key={item.id} name={item.name} />
  );

  const renderItemProduits = ({ item }) => (
    <ItemProduits key={item.id} name={item.name} prix={item.prix} onPress={() => console.log("test")}/>
  );
  
  useEffect(() => {
    const cleanupCategories =listeCategories();
    const cleanupProduits = listeProduits();
    return () => {
      cleanupCategories;
      cleanupProduits;
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
            <View style={{marginTop:30,flex:1}}>
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
                        data={afficheProduits}
                        renderItem={renderItemProduits}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
}

export default index
