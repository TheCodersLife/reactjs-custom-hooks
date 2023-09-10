import { useState, useEffect, useCallback } from 'react';

const useStorage = (key: string, defaultValue: number | string | null = null, type?: "local" | "session") => {

    const storage = type === "local" ? window.localStorage : type === "session" ? window.sessionStorage : undefined;
    
    const [value, setValue] = useState<any>(() => {

        console.log(storage);
        
        const storageValue = storage?.getItem(key)

        if (storageValue != null) return JSON.parse(storageValue);

        return defaultValue;
    })

    useEffect(() => {

        if (value === undefined) return storage?.removeItem(key)

        storage?.setItem(key, JSON.stringify(value))

    }, [key, value, storage])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]

}

export default useStorage;