import React, { useState, useEffect, useRef } from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Button, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction, updateTransaction } from '../data/actions/financialActions';
import { Transaction } from '../types';
import { Picker } from '@react-native-picker/picker';
import CurrencyInput from './UI/CurrencyInput';
import { formatCurrency } from '../utils/format';

interface AddTransactionModalProps {
    isVisible: boolean;
    onClose: () => void;
    type: 'add' | 'edit';
    selectedTransaction: Transaction | null;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
    isVisible,
    onClose,
    type,
    selectedTransaction,
}) => {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [displayValue, setDisplayValue] = useState<string>('');
    const [transactionType, setTransactionType] = useState<'income' | 'expense'>('income');
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedTransaction) {
            setDescription(selectedTransaction.description);
            setAmount(selectedTransaction.amount.toString());
            setTransactionType(selectedTransaction.type);
            setDisplayValue(formatCurrency(selectedTransaction.amount.toString()));
        } else {
            setDescription('');
            setAmount('');
            setTransactionType('income');
            setDisplayValue('');
        }
    }, [selectedTransaction, isVisible]);

    const handleSave = () => {
        if (description.trim() === '' || amount.trim() === '') {
            Alert.alert('Error', 'Deskripsi dan jumlah tidak boleh kosong.');
            return;
        }

        const newTransaction: Transaction = {
            id: selectedTransaction ? selectedTransaction.id : Date.now(),
            description,
            amount: parseFloat(amount),
            type: transactionType,
            date: new Date().toISOString(),
        };

        if (type === 'add') {
            dispatch(addTransaction(newTransaction));
        } else if (type === 'edit') {
            dispatch(updateTransaction(newTransaction));
        }

        onClose();
    };

    const handleCurrencyChange = (value: string) => {
        if (value === '0') {
            setDisplayValue('Rp ');
            setAmount('');
            return;
        }
        const numeric = value.replace(/\D/g, '');
        const formatted = formatCurrency(numeric);
        setAmount(numeric);
        setDisplayValue(formatted);
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
            onDismiss={onClose}
        >
            <View style={styles.centeredView}>

                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{type === 'add' ? 'Tambah Transaksi' : 'Edit Transaksi'}</Text>

                    <Text style={styles.label}>Deskripsi</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Masukkan deskripsi"
                        placeholderTextColor={'#999'}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <Text style={styles.label}>Jumlah</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Rp 0"
                        placeholderTextColor={'#999'}
                        keyboardType="number-pad"
                        returnKeyType="done"
                        value={displayValue}
                        onChangeText={handleCurrencyChange}
                        onBlur={() => {
                            if (!displayValue) {
                                setDisplayValue('Rp ');
                            }
                        }}
                    />

                    <Text style={styles.label}>Jenis Transaksi:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={transactionType}
                            style={styles.picker}
                            onValueChange={(itemValue: 'income' | 'expense') => setTransactionType(itemValue)}
                        >
                            <Picker.Item label="Pemasukan" value="income" />
                            <Picker.Item label="Pengeluaran" value="expense" />
                        </Picker>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Simpan" onPress={handleSave} />
                        <Button title="Batal" onPress={onClose} color="gray" />
                    </View>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        color: '#333',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        width: '100%',
    },
    picker: {
        flex: 1,
        // marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        width: '100%',
    },
});

export { AddTransactionModal };