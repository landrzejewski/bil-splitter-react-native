import {Platform, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const FormField = (props) => (
    <>
        <Text style={props.labelStyle}>{props.labelText}</Text>
        <TextInput style={props.inputStyle} value={props.value.toString()}
                   onChangeText={props.onChange}
                   placeholder={props.placeholderText}/>
    </>
);


export default function App() {

    const [amount, setAmount] = useState(0)
    const [persons, setPersons] = useState(1)
    const [tip, setTip] = useState(10)

    const calculate = () => {
        return (+amount + (amount * (tip / 100))) / persons;
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.androidSafeArea}>
                <FormField labelStyle={styles.label} inputStyle={styles.input}
                           labelText="Kwota" placeholderText="Podaj wartość rachunku"
                           value={amount} onChange={(value) => setAmount(value)}/>
                <FormField labelStyle={styles.label} inputStyle={styles.input}
                           labelText="Ilość osób" placeholderText="Podaj ilość osób"
                           value={persons} onChange={setPersons}/>
                <FormField labelStyle={styles.label} inputStyle={styles.input}
                           labelText="Napiwek w procentach" placeholderText="Podaj wielkość napiwku w procentach"
                           value={tip} onChange={setTip}/>
                <Text>Do zapłaty na osobę: {calculate()} zł</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    label: {
        fontSize: 14,
    },
    input: {
        fontSize: 14,
        backgroundColor: 'lightgray'
    },
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 0
    }
});
