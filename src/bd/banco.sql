-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS movie_review;

USE movie_review;

-- Criação da tabela Usuário
CREATE TABLE Usuario (
    ID INT AUTO_INCREMENT,
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Senha VARCHAR(100),
    PRIMARY KEY (ID)
);

-- Criação da tabela Filme
CREATE TABLE Filme (
    ID INT AUTO_INCREMENT,
    Título VARCHAR(200),
    Diretor VARCHAR(100),
    Ano_de_Lançamento INT,
    Gênero VARCHAR(50),
    PRIMARY KEY (ID)
);

-- Criação da tabela Série
CREATE TABLE Serie (
    ID INT AUTO_INCREMENT,
    Título VARCHAR(200),
    Criador VARCHAR(100),
    Ano_de_Lançamento INT,
    Gênero VARCHAR(50),
    Numero_de_Temporadas INT,
    PRIMARY KEY (ID)
);

-- Criação da tabela Avaliação
CREATE TABLE Avaliacao (
    ID INT AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Filme INT,
    ID_Serie INT,
    Nota INT,
    Data DATE,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID),
    FOREIGN KEY (ID_Filme) REFERENCES Filme(ID),
    FOREIGN KEY (ID_Serie) REFERENCES Serie(ID)
);

-- Criação da tabela Comentário
CREATE TABLE Comentario (
    ID INT AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Filme INT,
    ID_Serie INT,
    Texto VARCHAR(500),
    Data DATE,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID),
    FOREIGN KEY (ID_Filme) REFERENCES Filme(ID),
    FOREIGN KEY (ID_Serie) REFERENCES Serie(ID)
);
