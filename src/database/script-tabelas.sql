-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE pound;

USE pound;

CREATE TABLE pesquisaJogos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	jogo VARCHAR(50)
);

insert into pesquisaJogos (jogo) values ('FPS'),
('RPG'),
('Mundo aberto'),
('Sobrevivência'),
('Outros/diversos');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_jogo INT,
    FOREIGN KEY (fk_jogo) REFERENCES pesquisaJogos(id)
);

CREATE TABLE anonimo(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

/*create table perfil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fk_jogo INT,
	FOREIGN KEY (fk_jogo) REFERENCES pesquisaJogos(id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);*/

CREATE TABLE resposta(
	id INT PRIMARY KEY AUTO_INCREMENT,
	texto VARCHAR(500) not null,
    dataPostada datetime, -- colocar no insert do node como NOW() para ele postar a data que a mensagem foi postada
    fk_anonimo INT,
    fk_usuario INT,
    FOREIGN KEY (fk_anonimo) REFERENCES anonimo(id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE forum (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100) not null,
-- descricao VARCHAR(150), se conseguir colocar descrição nos fóruns, descomenta essa linha
	fk_resposta INT,
    fk_anonimo INT,
	fk_usuario INT,
    FOREIGN KEY (fk_anonimo) REFERENCES anonimo(id),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_resposta) REFERENCES resposta(id)
);


select * from usuario;
select * from PesquisaJogos;
