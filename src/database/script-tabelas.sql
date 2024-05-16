-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE pound;

USE pound;

CREATE TABLE pesquisaMusica (
	id INT PRIMARY KEY AUTO_INCREMENT,
	musica VARCHAR(50)
);
CREATE TABLE pesquisaJogos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	jogo VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_musica INT,
    fk_jogo INT,
	FOREIGN KEY (fk_musica) REFERENCES pesquisaMusica(id),
    FOREIGN KEY (fk_jogo) REFERENCES pesquisaJogos(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

insert into pesquisaMusica (musica) values ('Pop'),
('Rock'),
('Funk'),
('K-pop'),
('Samba');
insert into pesquisaJogos (jogo) values ('FPS'),
('RPG'),
('Mundo aberto'),
('Sobrevivência'),
('Terror');

select * from usuario;
select * from PesquisaJogos;