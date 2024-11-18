import React, { useEffect, useState, useRef } from "react"
import { Text, ImageBackground, View, StyleSheet, Pressable, ScrollView, Animated, ActivityIndicator, Image } from "react-native"
import Section2Home from "./Section2Home"
import Section3Home from "./Section3Home"
import { useGetCategoriesQuery } from "../services/productsApi"
import { useDispatch } from "react-redux"
useDispatch
import { setCategory } from "../features/products/productsSlice"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../utils/colors"

const Home = () => {
  const navigation = useNavigation();
  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  const dispatch = useDispatch()
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    runAnimation();
  }, []);

  const animationValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(-50)).current;

  const runAnimation = () => {
    Animated.parallel([ // Ejecuta ambas animaciones en paralelo
      Animated.timing(animationValue, {
        toValue: 1, // Aumentar la opacidad a 1
        duration: 2000, // Duración de la animación en milisegundos
        useNativeDriver: true, // Usa el native driver para mejorar el rendimiento
      }),
      Animated.timing(translateYValue, {
        toValue: 0, // Mover hacia la posición original
        duration: 2000, // Duración de la animación en milisegundos
        useNativeDriver: true,
      }),
    ]).start(() => setAnimationComplete(true)); // Inicia ambas animaciones
  };

  return (

    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/back-home.jpeg')}
          style={styles.backgroundImage}
        >
          <Animated.View style={{
            ...styles.animatedContainer,
            opacity: animationValue,
            transform: [{ translateY: translateYValue }]
          }}>
            <View>
              <Text style={styles.welcome} >Bienvenido a Tu Agro</Text>
              <Text style={styles.us} >Comercializadora de productos y soluciones para el Agro</Text>
              <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate('Productos', {
                  screen: 'CategoriesRender',
                })}>
                  <Text style={styles.buttonText}>Sobre nosotros</Text>
                </Pressable>
              </View>
            </View>
          </Animated.View>
        </ImageBackground>
      </View>

      <View style={styles.secondSection}>
        <Section2Home />
      </View>
      <View style={styles.thirdSection}>
        <Section3Home />
      </View>
      {animationComplete && (
        <View style={styles.categoriesContainer}>
          <View style={styles.catTitleContainer}>
            <Text style={styles.catTitle}>Productos</Text>
            <Image source={require('../../assets/tractor.jpeg')} style={styles.imageCategories} resizeMode="contain" />
          </View>
          {isLoading
            ?
            <ActivityIndicator size="large" color="green" />
            :
            error
              ?
              <Text>Error al cargar las categorías</Text>
              : (
                categories.map(categorie => (
                  <Pressable
                    key={categorie.id}
                    onPress={() => {
                      dispatch(setCategory(categorie.title));
                      navigation.navigate('Productos', {
                        screen: 'ProductosCategoria',
                      });
                    }}
                    style={styles.catPress}
                  >
                    
                  <View style= {styles.categorieCard}>
                      <Text style={styles.categorieTitle}>{categorie.title}</Text>
                      <Image source={{ uri: categorie.image }} style={styles.categorieImgs} />
                  </View>
                  </Pressable>))
              )}
        </View>
      )}

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  animatedContainer: {
    flex: 1,
  },
  imageContainer: {
    height: 600,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  welcome: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily:'ChelseaMarket',
    paddingTop: '30%',
    paddingLeft: '10%',
    textShadowColor: colors.greenShadow,
    textShadowOffset: { width: 20, height: 0 },
    textShadowRadius: 20,
  },
  us: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: '10%',
    paddingLeft: '10%',
    textShadowColor: colors.greenShadow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '55%',
    marginTop: '15%',
    marginLeft: '10%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  secondSection: {
    flex: 1,
    height: 450,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  categoriesContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 1000,
  },
  categorieCard:{
    borderColor: 'gray',
    borderTopWidth: 2,
    borderBottomWidth: 7,
    borderRightWidth:7,
    flexDirection:'row',
    borderRadius:20,
    
 },
  catTitleContainer: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop:30,
    marginBottom:35,
    
  },
  catTitle: {
    fontSize: 22,
    fontFamily:'ChelseaMarket',
    backgroundColor:colors.yellow,
    padding:10,
    borderRadius:20,
    elevation:5,
  },
  categorieTitle: {
    width: 200,
    height: 60,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'600',
    borderRadius: 10,
    borderColor: colors.green,
    borderWidth: 2,
    paddingTop: 15,
  },
  catPress: {
    flexDirection: 'row',
  },
  imageCategories: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 25,
   
  },
  categorieImgs: {
    width: 60,
    height: 60,
    borderRadius: 80,
  }
})

export default Home;
