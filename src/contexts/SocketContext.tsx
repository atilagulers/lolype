//import React, {createContext, useContext, ReactNode} from 'react';
//import {io} from 'socket.io-client';

//const SocketContext = createContext<SocketIOClient.Socket | null>(null);

//const socket = io(process.env.REACT_APP_API_URL!, {transports: ['websocket']});

//interface SocketProviderProps {
//  children: ReactNode;
//}

//const SocketProvider: React.FC<SocketProviderProps> = ({children}) => (
//  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//);

//const useSocket = (): SocketIOClient.Socket => {
//  const context = useContext(SocketContext);
//  if (!context) {
//    throw new Error('useSocket must be used within a SocketProvider');
//  }
//  return context;
//};

//export {SocketProvider, useSocket};
