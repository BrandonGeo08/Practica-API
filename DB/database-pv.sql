CREATE DATABASE IF NOT EXISTS parque_vehicular;

USE parque_vehicular;

CREATE TABLE  relacionVehiculos(
    id INT(10) NOT NULL AUTO_INCREMENT,
    clvEmpleado INT(6) NOT NULL,
    sucursal VARCHAR(20) DEFAULT NULL,
    nomEmpleado VARCHAR(20) DEFAULT NULL,
    apPaterno VARCHAR(20) DEFAULT NULL,
    apMaterno VARCHAR(20) DEFAULT NULL,
    yearModelo INT(4) DEFAULT NULL,
    modelo VARCHAR(20) DEFAULT NULL,
    colorMoto VARCHAR(20) DEFAULT NULL,
    numSerie VARCHAR(25) DEFAULT NULL,
    numPlacas VARCHAR(20) DEFAULT NULL,
    numPoliza VARCHAR(20) DEFAULT NULL,
    numInciso VARCHAR(20) DEFAULT NULL,
    polizaVencimiento DATE NULL,
    numFactura VARCHAR(20) DEFAULT NULL,
    fechaFactura DATE NULL,
    subtotalFactura VARCHAR(20) DEFAULT NULL,
    ivaFactura VARCHAR(20) DEFAULT NULL,
    totalFactura VARCHAR(20) DEFAULT NULL,
    aseguradora VARCHAR(20) DEFAULT NULL,
    estadoPoliza VARCHAR(20) DEFAULT NULL,
    observaciones VARCHAR(100) DEFAULT NULL
    PRIMARY KEY (id)
);


INSERT INTO relacion_vehiculos VALUES 
    (1, 000001 'acapulco', 'Brandon Geovanni', 'Pérez', 'Hernández',
    2023, 'Cargo 150', 'Blanco', '3H1KA0541PD104548', '21SAT1',  
    '813E8B00T9', 'No aplica', '2023-05-01', 'A31917', '2023-09-06',
    '33,181.03', '5,308.97', '38,490', 'BBVA', 'Bien', 'comentario' )




CREATE TABLE  administradores(
    id INT(10) NOT NULL AUTO_INCREMENT,
    clvEmpleado INT(6) NOT NULL,
    nombre VARCHAR(20) DEFAULT NULL,
    apPaterno VARCHAR(20) DEFAULT NULL,
    apMaterno VARCHAR(20) DEFAULT NULL,
    correo VARCHAR(20) DEFAULT NULL,
    usuario VARCHAR(20) DEFAULT NULL,
    pasw VARCHAR(20) DEFAULT NULL
    PRIMARY KEY (id)
);

INSERT INTO administradores VALUES
(1, 'Brandon Geovanni', 'Pérez', 'Hernández', 'sistemas2@', 'Admin2', '12345'),
(2, 'Milton', 'Meza', 'Aguilar', 'sistemas1@', 'Admin1', '54321')


CREATE TABLE  usuarios(
    id INT(10) NOT NULL AUTO_INCREMENT,
    clvEmpleado INT(6) NOT NULL,
    nomEmpleado VARCHAR(20) DEFAULT NULL,
    apPaterno VARCHAR(20) DEFAULT NULL,
    apMaterno VARCHAR(20) DEFAULT NULL,
    sucursal VARCHAR(20) DEFAULT NULL,
    telefono int(13) NOT NULL,
    direccion VARCHAR(50) DEFAULT NULL,
    ciudad VARCHAR(20) DEFAULT NULL,
    curp VARCHAR(18) NOT NULL,
    liceConducir(20) DEFAULT NULL,
    sexo VARCHAR(20) DEFAULT NULL,
    usuario VARCHAR(20) DEFAULT NULL
    PRIMARY KEY (id)
);


INSERT INTO usuarios VALUES 
(1, 000001, 'Brandon Geovanni', 'Pérez', 'Hernández', 'Acapulco', 
8187048730, 'Gral Martinez', 'Doctor Arroyo', 'BGPH00000000', 'alkjh', 
'masculino', 'cobrador')