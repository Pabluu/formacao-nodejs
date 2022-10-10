CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES
    ('Pablo', 'pablo@email', 22),
    ('Silva', 'silva@email', 22 ),
    ('Henrique', 'henrique@email', 20 );


DELETE FROM usuarios WHERE idade = 20;

UPDATE usuarios SET nome = 'Pablito' WHERE nome = 'Pablo';