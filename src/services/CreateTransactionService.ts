import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request{
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  public constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, value, type}: Request): Transaction {
    // TODO
    const {total} = this.transactionsRepository.getBalance()

    if(type === 'outcome' && total < value){
      throw new Error('You dont have enough money')
    }

    const transactions = this.transactionsRepository.create({
      title,
      value,
      type,
    })

    return transactions
  }
}

export default CreateTransactionService;
