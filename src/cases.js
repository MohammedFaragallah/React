import { addExpense } from './redux/actions/expenses';
import storeConfigurations from './redux/Redux-store/store';
const store = storeConfigurations();

const Cases = () => {
  store.dispatch(
    addExpense({
      description: 'rent',
      note: 'noterenttest',
      amount: 1,
      createdAt: 5000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'asdasd',
      note: 'noteasdasdtest',
      amount: 55,
      createdAt: 21000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'asdasd',
      note: 'noteasdasdtest',
      amount: 99,
      createdAt: -12000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'asd',
      note: 'noteasdtest',
      amount: -50,
      createdAt: -1000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'rent',
      note: 'notetest',
      amount: 3,
      createdAt: -1000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'asd',
      note: 'notetest',
      amount: 500,
      createdAt: 1000,
    })
  );
  store.dispatch(
    addExpense({
      description: 'asd',
      note: 'notetest',
      amount: 999,
      createdAt: -21000,
    })
  );
  store.dispatch(
    addExpense({
      description: 'asd',
      note: 'notetest',
      amount: 16,
      createdAt: 12000,
    })
  );

  store.dispatch(
    addExpense({
      description: 'Rent',
      amount: 100,
    })
  );

  store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
};

export { Cases, store };
