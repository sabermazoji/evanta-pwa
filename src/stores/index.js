import { createContext } from 'react';
import EventModel from './eventModel';

const stores = {
    EventModel,
};
const StoreContext = createContext(stores);
export default StoreContext;
