import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import toast from 'react-hot-toast';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        createdAt: new Date()
      };
      
      setUser(mockUser);
      toast.success('Successfully logged in!');
    } catch (error) {
      toast.error('Login failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      const mockUser: User = {
        id: '1',
        email,
        name,
        createdAt: new Date()
      };
      
      setUser(mockUser);
      toast.success('Account created successfully!');
    } catch (error) {
      toast.error('Sign up failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      // Simulate Google login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email: 'user@gmail.com',
        name: 'John Doe',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
        createdAt: new Date()
      };
      
      setUser(mockUser);
      toast.success('Successfully logged in with Google!');
    } catch (error) {
      toast.error('Google login failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
      toast.success('Successfully logged out!');
    } catch (error) {
      toast.error('Logout failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, loginWithGoogle, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};