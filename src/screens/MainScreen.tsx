import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { AddTransactionModal } from '../components/AddTransactionModal';
import { TransactionItem } from '../components/TransactionItem';
import { TotalBalance } from '../components/TotalBalance';
import { RootState } from '../data/store';
import { Transaction } from '../types';

const MainScreen: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.financial.transactions);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [modalType, setModalType] = useState<'add' | 'edit'>('add');

    const openAddModal = () => {
        setSelectedTransaction(null);
        setModalType('add');
        setModalVisible(true);
    };

    const openEditModal = (item: Transaction) => {
        setSelectedTransaction(item);
        setModalType('edit');
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedTransaction(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catatan Keuangan</Text>
            <TotalBalance transactions={transactions} />

            {/* <Button title="Tambah Pemasukan/Pengeluaran" onPress={openAddModal} /> */}
            <TouchableOpacity style={styles.button} onPress={openAddModal}>
                <Text style={styles.buttonText}>+ Tambah Pemasukan/Pengeluaran</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Daftar Transaksi</Text>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TransactionItem
                        item={item}
                        onEdit={openEditModal}
                    />
                )}
            />

            <AddTransactionModal
                isVisible={isModalVisible}
                onClose={closeModal}
                type={modalType}
                selectedTransaction={selectedTransaction}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'midnightblue',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MainScreen;