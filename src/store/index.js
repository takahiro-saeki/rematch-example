import { init } from '@rematch/core';
import todo from './todo';

const store = init({
    models: {
        todo
    }
});

export default store;