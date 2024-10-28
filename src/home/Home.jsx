import React, {useEffect, useState, useRef} from "react"
import { Text, ImageBackground, View,StyleSheet, Pressable, ScrollView,Animated, ActivityIndicator} from "react-native"
import { useGetCategoriesQuery } from "../services/productsApi"
import { useDispatch } from "react-redux"
useDispatch
import { setCategory } from "../features/products/productsSlice"


 const Home = ({navigation}) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  const dispatch = useDispatch()
  //const [showCategories, setShowCategories] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false);
      useEffect(() => {
        runAnimation();
        const timer = setTimeout(() => setAnimationComplete(true), 2000);
        return () => clearTimeout(timer); // Clean up
      }, []);


  const animationValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(-50)).current;
  const runAnimation = () =>  {
    
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

  useEffect(() => {
    runAnimation();
  }, []);

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
            transform: [{ translateY: translateYValue }]}}>  
                  <View>
                        <Text style={styles.welcome} >Bienvenido a Tu Agro</Text>
                        <Text style={styles.us} >Comercializadora de productos y soluciones para el Agro</Text>
                        <View style= {styles.button}>
                         <Pressable onPress={()=>navigation.navigate('Productos')}>
                                     <Text style={styles.buttonText}>Sobre nosotros</Text>
                         </Pressable>
                         </View>
                  </View>
            </Animated.View>
         </ImageBackground>
        </View>

        <View style={styles.secondSection}>
            <Text>HOla</Text>
        </View>

        {animationComplete && (
            <View style={styles.categoriesContainer}>
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
                      navigation.navigate('ProductosCategoria');}}
                    >
                    <Text>{categorie.title}</Text>
                  </Pressable> ))
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
    height: 800,
  },
  backgroundImage: {
    flex: 1,
    width:'100%',
    height:'100%',

  },
  welcome: {
    color:'#FFFFFF',
    fontSize: 25,
    paddingTop:'30%',
    paddingLeft:'10%',
    textShadowColor: 'rgba(91, 255, 51 , 0.75)',
    textShadowOffset: { width: 20, height: 0 },
    textShadowRadius: 20,
  },
  us: {
    color:'#FFFFFF',
    fontSize: 25,
    fontWeight:'bold',
    paddingTop:'10%',
    paddingLeft:'10%',
    textShadowColor: '#5bff33', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
  },
  button: {
    backgroundColor: '#04B404', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width:'55%',
    marginTop:'15%',
    marginLeft:'10%',
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto en el botón
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  secondSection: {
    height:500,
  }
})
export default Home;

/*probaremos----->
  const animationValue = new Animated.Value(0);
  const translateYValue = new Animated.Value(-50); 

  const runAnimation = () => {
    Animated.parallel([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
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
                <Text style={styles.welcome}>Bienvenido a Tu Agro</Text>
                <Text style={styles.us}>Comercializadora de productos y soluciones para el Agro</Text>
                <View style={styles.button}>
                  <Pressable onPress={() => navigation.navigate('Productos')}>
                    <Text style={styles.buttonText}>Sobre nosotros</Text>
                  </Pressable>
                </View>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>
      }
      ListFooterComponent={<CategorieScreen />}
      contentContainerStyle={styles.contentContainer}
      data={[]}
      renderItem={null} // Ya que solo queremos un header y un footer.
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    height: 300,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  us: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Home;
*/