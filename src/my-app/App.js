import { Text, View, Image } from 'react-native';

import Cadastro from './pages/cadastro'
import Login from './pages/login'
import { useState } from 'react';
export default function App() {
  const [user, setUser] = useState();
  return !user ? <Login setUser={setUser} /> : <login/>
}
