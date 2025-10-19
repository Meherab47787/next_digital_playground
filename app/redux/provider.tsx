'use client';

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

function StoreProvider(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    const storeReference = useRef<AppStore | null>(null);
    if (!storeReference.current) {
    // Create the store instance the first time this renders
    storeReference.current = makeStore();
  }
    return <Provider store={storeReference.current}>{children}</Provider>
}

export default StoreProvider