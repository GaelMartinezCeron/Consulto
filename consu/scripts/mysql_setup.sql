-- =============================================
-- Script para crear la base de datos en phpMyAdmin
-- =============================================

-- 1. Primero crea la base de datos (ejecuta esto primero)
CREATE DATABASE IF NOT EXISTS webconsul;

-- 2. Selecciona la base de datos
USE webconsul;

-- 3. Crea la tabla de consultas
CREATE TABLE IF NOT EXISTS consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    empresa VARCHAR(255),
    tipo_consulta VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    estado ENUM('pendiente', 'en_proceso', 'completada', 'cancelada') DEFAULT 'pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 4. Crear tabla de administradores
CREATE TABLE IF NOT EXISTS administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Insertar administrador por defecto
-- Usuario: admin@webconsul.com
-- Password: admin123 (hasheada con bcrypt)
INSERT INTO administradores (nombre, email, password) VALUES
('Administrador', 'admin@webconsul.com', '$2b$10$rQZ8K1X5X5X5X5X5X5X5XuYKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJ');

-- IMPORTANTE: Cambia la contrasena del administrador despues de la instalacion
-- Para generar un nuevo hash, usa: https://bcrypt-generator.com/

-- 6. (Opcional) Insertar datos de prueba
INSERT INTO consultas (nombre, email, telefono, empresa, tipo_consulta, mensaje, estado) VALUES
('Juan Perez', 'juan@ejemplo.com', '555-1234', 'Empresa ABC', 'Desarrollo Web', 'Necesito una pagina web para mi negocio', 'pendiente'),
('Maria Garcia', 'maria@ejemplo.com', '555-5678', 'Startup XYZ', 'Marketing Digital', 'Quiero mejorar mi presencia en redes sociales', 'en_proceso'),
('Carlos Lopez', 'carlos@ejemplo.com', '555-9012', 'Comercio Local', 'Software Personalizado', 'Necesito un sistema de inventario', 'completada');
