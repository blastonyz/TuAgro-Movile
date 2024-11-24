#PROYECTO TU AGRO
##DESARROLLADO EN REACT NATIVE & EXPO GO

## **LINK DE DESCARGA DEL APK** [APK](https://drive.google.com/file/d/1lt6xDKnMc2BYWEEobeDZLeUWQ3iBIag0/view?usp=sharing)

### Descripcion

 TuAgro es un e-commerce orientado a ventas en el sector agroindustrial, donde los productores pueden acudir para abastecerse de insumos, recibir asesoramiento tecnico y presupuestos sin cargo

### PASOS DE EJECUCION

#### 1. **CLONAR EL PROYECTO**
#### git clone [tuagro](https://github.com/blastonyz/TuAgro-Movile)

#### registrarse y loguearse en [expo.dev](https://expo.dev/)

#### 2.**INSTALAR DEPENDENCIAS NECESARIAS**
#### **npm install**
####

#### 3.**Ejecutar de manera local**

#### **npx expo start** seleccionar 's' (switch to expo go)

#### 3.**Ejecutar modo Development**
#### **npx expo start**  iniciar sesion en eas(expo aplication service)

### 4.Configurar Expo CLI
#### **eas build:configure**

#### Generar Build de Desarrollo
#### **eas build --platform android --profile development**

#### DEPENDENCIAS UTILIZADAS

    react-navigation/drawer 6.7.2,
    react-navigation/native 6.1.18,
    react-navigation/native-stack 6.11.0,
    reduxjs/toolkit 2.3.0,
    expo: 51.0.39,
    expo-font: 12.0.10,
    expo-image-picker: 15.0.7,
    expo-linear-gradient: 13.0.2,
    expo-splash-screen: 0.27.7,
    expo-sqlite: 14.0.6,
    expo-status-bar: 1.12.1,
    react: 18.2.0,
    react-native: 0.74.5,
    react-native-gesture-handler: 2.16.1,
    react-native-reanimated: 3.10.1,
    react-native-safe-area-context: 4.10.5,
    react-native-screens: 3.31.1,
    react-native-vector-icons: 10.2.0,
    react-redux: 9.1.2,
    expo-dev-client: 4.0.29

#ARQUITECTURA DEL PROYECTO

### El archivo App.js sirve como punto de entrada, desde alli se inicializa la DB local SQLite para brindar persistencia a las sesiones de usuario, se insertan las fuentes de texto, se define el provedor de estado global (redux toolkit) y se montan los demas componentes

## NAVEGACION
    ###src/navigation
    **Navigator.jsx**
     La navegacion esta realizada con los modulos Drawer Navigation (react-navigation/drawer) y React Navigation ( react-navigation/native ,react-navigation/native-stack).
     Puede observarse en la seccion principal el menu hamburguesa desplegable, que constituye el navegador principal, y  donde se origina el objeto navigation utilizados por sus stacks hijos.
    **TabBottoms.jsx** 
    A su vez, hay otro componente que funciona como navegador auxiliar, que se sirve de la navegacion principal, llamado **TabBottoms.jsx** (src/components/TabBottoms.jsx), tambien se encarga de comprobar la existencia o no de sesion, recuperar y setear las fotos de perfil sies que el usuario contaba con una

    CategoriesStack.jsx

    es un stack anidado, donde se defina la ruta de acceso a los productos, carrito de compras y recibos de compra que el usuario a realizado

    AuthStack es el stack aniddado que define el flujo de sesiones, como registro logIn y perfil del usuario, utiliza nacegacion condicional para determinar si hay usuario registrado o no

## Persistencia

se utilizo Realtime Database, servicio brindado por firebase, para persisttir colecciones en formato de arbol json, de productos, categorias, recibos de compra, y fotos de perfil almacanadas con encodificacion base64.
a nivel local la persistencia de sesiones se lleva a cabo con una db local generada por el modulo SQlite

## Autenticacion

Se utilizo el servicio de firebase auth, para tener registro de los usuarios activos, registrar nuevos usuarios, y manejar las sesiones valiendose de la seguridad que brinda firenbase en este proceso con sus tokens y loclIds, y hash de passwords.

## CategoriesScreen.jsx

componente de renderizacion de categorias de productos

## CategoryProducts.jsx


componente de renderizacion de lista de productos, segun categoria seleccionada

## ProductSelected.jsx

componente de render de producto individual seleccionado

## API src/services

### aqui encontraremos los archivos de interface de aplicacion, donde se realizan las distintas peticiones, manejadas por redux toolkit,

## src/features

### archivos donde se definen los reducers (variables de estado global)

## src/app

### archivo store.js actua como provedor de estados globales y apis, definidas y utilizadas en el proyecto, redux brinda inmutabilidad a traves del patron singleton, limitando la existencia de una sola instancia del estado global

# PROFESOR: Pablo Macia
## desarrollado por Blas A. Zamora




 
