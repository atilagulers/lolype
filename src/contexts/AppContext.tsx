import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {io, Socket} from 'socket.io-client';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

interface Player {
  id: string;
  name: string;
}

interface Room {
  id: string;
  players: Player[];
}

interface AppContextType {
  socket: Socket | null;
  room: Room | null;
  setRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_API_URL!);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const contextValue: AppContextType = {
    socket,
    room,
    setRoom,
  };

  if (!socket) {
    return <LoadingSpinner />;
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
