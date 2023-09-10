import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const UseStorageComponent: React.FC<UseStorageComponentProps> = (props) => {

    const [local, setLocal, removeLocal] = useStorage("firstName", "Coders", "local")
    const [session, setSession, removeSession] = useStorage("lastName", "Life", "session")

    useEffect(() => {
        console.log("local", local);
        console.log("session", session);

    }, [local, session])

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        setLocal("updatedLocal")
                    }}
                >
                    Set Local Storage Value
                </button>

                <button
                    onClick={() => {
                        setSession("sessionUpdated")
                    }}
                >
                    Set Session Storage Value
                </button>
            </div>

            <div>

                <p>Local Storage Value: {local}</p>
                <p>Session Storage Value: {session}</p>

            </div>

            <div style={{ marginTop: 10 }}>
                <button
                    onClick={removeLocal}
                >
                    Remove Local Value
                </button>

                <button
                    onClick={removeSession}
                >
                    Remove Session Value
                </button>
            </div>
        </>
    )
}

interface UseStorageComponentProps {
    [key: string]: any
}

export default UseStorageComponent;