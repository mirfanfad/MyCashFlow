import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Transaction } from '../types';

interface TotalBalanceProps {
    transactions: Transaction[];
}

const TotalBalance: React.FC<TotalBalanceProps> = ({ transactions }) => {
    const totalIncome = transactions
        .filter((item) => item.type === 'income')
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transactions
        .filter((item) => item.type === 'expense')
        .reduce((sum, item) => sum + item.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <View style={styles.container}>
            <View style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>Keuangan Anda:</Text>
                <Text style={styles.balanceAmount}>Rp {balance.toLocaleString()}</Text>
            </View>
            <View style={styles.summaryContainer}>
                <View style={styles.incomeCard}>
                    <Text style={styles.incomeLabel}>Pemasukan:</Text>
                    <Text style={styles.incomeAmount}>+ Rp {totalIncome.toLocaleString()}</Text>
                </View>
                <View style={styles.expenseCard}>
                    <Text style={styles.expenseLabel}>Pengeluaran:</Text>
                    <Text style={styles.expenseAmount}>- Rp {totalExpense.toLocaleString()}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    balanceCard: {
        backgroundColor: '#e0f7fa',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    balanceLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00838f',
    },
    balanceAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00acc1',
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    incomeCard: {
        backgroundColor: '#e8f5e9',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    incomeLabel: {
        color: 'green',
        fontWeight: 'bold',
    },
    incomeAmount: {
        color: 'green',
    },
    expenseCard: {
        backgroundColor: '#ffebee',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    expenseLabel: {
        color: 'red',
        fontWeight: 'bold',
    },
    expenseAmount: {
        color: 'red',
    },
});

export { TotalBalance };