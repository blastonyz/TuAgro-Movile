import { useGetPurchasesQuery } from "../services/purchaseApi";
import { useSelector } from "react-redux";
import { Text, StyleSheet, View, FlatList } from "react-native";
import NoUserScreen from "./user/NoUserScreen";
import SectionTitle from "../components/ui/SectionTItle";
import { colors } from "../utils/colors";



const PurchasesScreen = () => {

    const user = useSelector(state => state.auth.value.email)
    const { data, error, isLoading } = useGetPurchasesQuery(user)

    if (error) {
        console.error("Error fetching purchases: ", error);
        return <Text>Error fetching purchases</Text>;
    }

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
 
    console.log('data: ',data);
    

    return (
        user ?
            <>
                <View style={styles.mainTitle}>

                    <SectionTitle text={`Tus Compras`} style={styles.mainTitle} />
                    <Text style={styles.userTitle}>{user}</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: purchase }) => {

                        const formatedDate = new Date(purchase.createdAt).toLocaleDateString();

                        return (
                            <View style={styles.purchase}>
                                <Text style={styles.date}>Fecha de Compra: {formatedDate}</Text>
                                <Text style={styles.date}>Total:{purchase.total} U$D </Text>
                                <FlatList
                                    data={purchase.cartItems}
                                    keyExtractor={(item, idx) => idx.toString()}
                                    renderItem={({ item }) => (
                                        <View style={styles.cartItem}>
                                            <Text>{item.title}</Text>
                                            <Text>{item.price} USD</Text>
                                        </View>
                                    )}
                                />
                            </View>
                        );
                    }}
                    style={styles.mainFlat}
                />
            </>
            :
            <NoUserScreen />


    );
};

const styles = StyleSheet.create({
    mainFlat: {
        marginTop: 25,
        marginLeft: 20,
    },
    mainTitle: {
        marginTop: 25
    },
    userTitle: {
        fontFamily: 'ChelseaMarket',
        fontSize: 18,
        color: colors.gray,
        textAlign: 'center',
        marginTop:15
    },
    purchase: {
        marginBottom: 20,
    },
    date: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    cartItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    }
});

export default PurchasesScreen;
