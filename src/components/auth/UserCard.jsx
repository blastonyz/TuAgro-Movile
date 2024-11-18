
import { Image, Text, StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const UserCard = ({ image, user }) => (
    image ? (
        <Image source={{ uri: image }} style={styles.profileImage} resizeMode='cover' />

    ) : (
        <Text style={styles.initial}>{user.charAt(0).toUpperCase()}</Text>
    )

)

export default UserCard

const styles = StyleSheet.create({
    initial: {
        fontSize: 40
    },
    profileImage: {
        borderRadius: 100,
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: colors.greenShadow,
    },
})