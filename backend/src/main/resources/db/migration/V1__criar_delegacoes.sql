CREATE TABLE delegacoes (
 id BIGSERIAL PRIMARY KEY,
 nome VARCHAR(120) NOT NULL,
 provincia VARCHAR(100) NOT NULL,
 cidade VARCHAR(100) NOT NULL,
 endereco VARCHAR(250),
 telefone VARCHAR(40),
 activa BOOLEAN NOT NULL DEFAULT TRUE
);
CREATE UNIQUE INDEX uk_delegacoes_nome_ci ON delegacoes (LOWER(nome));
