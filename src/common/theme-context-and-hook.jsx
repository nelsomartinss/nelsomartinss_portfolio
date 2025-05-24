// src/common/theme-context-and-hook.js
import { createContext, useContext } from 'react';

// Criação do Contexto
export const ThemeContext = createContext();

// Custom Hook para consumir o contexto
export const useTheme = () => useContext(ThemeContext);