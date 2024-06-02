-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE pound;

USE pound;

CREATE TABLE pound.pesquisaJogos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	jogo VARCHAR(50)
);

insert into pound.pesquisaJogos (jogo) values ('FPS'),
('RPG'),
('Mundo aberto'),
('Sobrevivência'),
('Outros/diversos');

CREATE TABLE pound.usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_jogo INT,
    FOREIGN KEY (fk_jogo) REFERENCES pesquisaJogos(id)
);

CREATE TABLE pound.anonimo(
	id INT PRIMARY KEY,
    nome VARCHAR(50)
);

create table pound.perfil (
	id INT PRIMARY KEY,
	fk_usuario INT,
	fk_jogo INT,
	FOREIGN KEY (fk_jogo) REFERENCES pesquisaJogos(id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from pound.usuario;
select * from pound.PesquisaJogos;
select * from pound.anonimo;