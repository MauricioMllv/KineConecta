--
CREATE TABLE news (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    content TEXT NOT NULL,
    imagefull VARCHAR(255) NOT NULL,
    imagecard VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT 0
);

CREATE TABLE patients (
    rut VARCHAR(10) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(50),
    gender ENUM('Male', 'Female', 'Other'),
    age INT
);


CREATE TABLE medical_appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    appointment_datetime DATETIME NOT NULL,
    reason VARCHAR(255),
    observations TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (patient_rut) REFERENCES patients(rut)
);

CREATE TABLE professionals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    sector VARCHAR(100),
    work_schedule VARCHAR(255),
    rating DECIMAL(3,2),
    sector_availability ENUM('Available', 'Not available')
);

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    public_id VARCHAR(150) NOT NULL,
    section ENUM('logo_navbar', 'slider_inicio', 'logo_footer', 'slider_reservas', 'contacto', 'nosotros', 'servicios') NOT NULL
);