import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('movieReview.db');

// Função para criar a tabela 'usuarios'
const createTableUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log('Criando tabela usuarios...');
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, usuario TEXT, senha TEXT)',
        [],
        () => {
          console.log('Tabela usuarios criada com sucesso!');
          resolve();
        },
        (error) => {
          console.error('Erro na criação da tabela: ', error);
          reject(error);
        }
      );
    });
  });
};

export { createTableUsuarios, db };
