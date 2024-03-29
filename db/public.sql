-- Active: 1706143260686@@127.0.0.1@5432@zero_academy

CREATE DATABASE zero_academy;


CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    foto_perfil bytea,
    especializacion VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM usuarios;


CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL
);

DELETE FROM roles;

CREATE TABLE usuarios_roles (
		id SERIAL PRIMARY KEY,
		usuario_id INT REFERENCES usuarios (id),
		role_id INT REFERENCES roles (id),
        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(50),
    imagen bytea
);


CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(500),
    categoria_id INT REFERENCES categorias (id),
    instructor_id INT REFERENCES usuarios (id),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE matriculados (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios (id),
    curso_id INT REFERENCES cursos (id),
    fecha_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

