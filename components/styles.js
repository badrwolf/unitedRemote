import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#F5F5F5',
        borderBottomWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20
    },
    gitItemHeader: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 10,
    },

    gitItemHeaderDesc: {
        color: 'black',
        fontSize: 9,
        textAlign: 'left'
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    }
})

export default styles;