/**
 * là context pass dữ liệu khi click chi tiết Student
 */
import React, { createContext } from 'react';

const PassInfoUser = createContext({});

export default PassInfoUser;
export const PassInfoUserProvider = PassInfoUser.Provider;
export const PassInfoUserConsumer = PassInfoUser.Consumer;