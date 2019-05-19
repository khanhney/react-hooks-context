import React, { createContext } from 'react';

const DemoContext = createContext([{}, () => {}]);

export default DemoContext;
export const DemoProvider = DemoContext.Provider;
export const DemoConsumer = DemoContext.Consumer;