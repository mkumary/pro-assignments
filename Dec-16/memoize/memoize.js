
const memoize = (fn, createKey = JSON.stringify) => { 
    const cacheStore = new Map();
    return (...arg) => { 
        const key = createKey(fn);
        if (cacheStore.has(key)) {
            return cacheStore.get(key);
        } else { 
            const result = fn(...args);
            cacheStore.set(key, result);
            return result;
        }
    }
}
module.exports = memoize;