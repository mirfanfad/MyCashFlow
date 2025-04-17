import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../data/actions/financialActions';
import { Transaction } from '../types';
import { RootState } from '../data/store';

interface TransactionItemProps {
    item: Transaction;
    onEdit: (item: Transaction) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ item, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        // show alert to confirm deletion
        Alert.alert(
            'Hapus Transaksi',
            'Apakah Anda yakin ingin menghapus transaksi ini?',
            [
                {
                    text: 'Batal',
                    style: 'cancel',
                },
                {
                    text: 'Hapus',
                    onPress: () => {
                        dispatch(deleteTransaction(item.id));
                    },
                },
            ],
            { cancelable: false }
        );
        // dispatch(deleteTransaction(item.id));
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={[styles.amount, item.type === 'expense' ? styles.expense : styles.income]}>
                    {item.type === 'expense' ? '-' : '+'} Rp {item.amount.toLocaleString()}
                </Text>
                {/* <Text style={styles.date}>
                    {new Date(item.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })}
                </Text>
                <Text style={styles.time}>
                    {new Date(item.date).toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Text> */}
            </View>
            <View style={styles.itemActions}>
                <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Hapus</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    itemInfo: {
        flex: 1,
    },
    description: {
        fontSize: 16,
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    income: {
        color: 'green',
    },
    expense: {
        color: 'red',
    },
    itemActions: {
        flexDirection: 'row',
    },
    editButton: {
        backgroundColor: 'orange',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export { TransactionItem };