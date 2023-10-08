// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0
    })
})