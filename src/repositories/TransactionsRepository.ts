import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO{
  title: string;
  value: number;
  type: 'income' | 'outcome';
}


class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({title, value, type}:CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({title, value, type})

    this.transactions.push(transaction)
    return transaction;
  }
}

export default TransactionsRepository;
