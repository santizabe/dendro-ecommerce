# Dendro SAC - E-commerce Platform

## 📋 Descripción del Proyecto

Dendro SAC es una plataforma de comercio electrónico especializada en soluciones ambientales y paisajísticas. La empresa es líder en hidrosiembra, revegetación, reforestación y control de erosión, ofreciendo productos especializados para el sector ambiental y de construcción.

## 🌱 Sobre Dendro SAC

Dendro SAC es una empresa experta en:
- **Hidrosiembra**: Técnicas avanzadas de siembra por aspersión
- **Revegetación**: Recuperación de áreas degradadas
- **Reforestación**: Plantación de especies nativas
- **Control de Erosión**: Soluciones para estabilización de suelos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React** - Biblioteca principal para la interfaz de usuario
- **React Router DOM** - Navegación y enrutamiento
- **Reactstrap** - Componentes de Bootstrap para React
- **Framer Motion** - Animaciones y transiciones
- **Remix Icon** - Iconografía

### Backend & Database
- **Firebase Authentication** - Sistema de autenticación de usuarios
- **Firebase Firestore** - Base de datos NoSQL en tiempo real
- **Firebase Storage** - Almacenamiento de archivos e imágenes

### Estado y Notificaciones
- **React Redux** - Manejo del estado global
- **React Toastify** - Notificaciones toast

### Build Tool
- **Vite** - Herramienta de construcción y desarrollo rápido


## 🚀 Instalación y Configuración

### Prerrequisitos
```bash
Node.js >= 14.0.0
npm o yarn
```

### Instalación

1. Clonar el repositorio
```bash
git clone [url-del-repositorio]
cd dendro-ecommerce
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:
```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## 🔧 Configuración de Firebase

### 1. Crear un proyecto en Firebase Console
- Ve a [Firebase Console](https://console.firebase.google.com/)
- Crea un nuevo proyecto
- Obtén las credenciales de configuración

### 2. Habilitar servicios

**Authentication:**
- Ve a Authentication → Get Started
- Habilita Email/Password como método de inicio de sesión

**Firestore Database:**
- Ve a Firestore Database → Create Database
- Configura las reglas de seguridad según tus necesidades

**Storage:**
- Ve a Storage → Get Started
- Configura las reglas de seguridad para almacenamiento de archivos

## 📂 Estructura del Proyecto
```
dendro-ecommerce/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Helmet/
│   │   └── Layout/
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Shop.jsx
│   ├── services/        # Servicios y lógica de negocio
│   ├── data/            # Datos estáticos y constantes
│   │   └── socials.jsx
│   ├── styles/          # Archivos CSS
│   ├── firebase.config.jsx  # Configuración de Firebase
│   └── App.jsx          # Componente principal
├── .env                 # Variables de entorno
├── package.json
└── vite.config.js
```

## 🔐 Características de Autenticación

### Registro de Usuarios
- Registro con email y contraseña
- Almacenamiento de perfil de usuario en Firestore

### Inicio de Sesión
- Autenticación segura con Firebase
- Manejo de sesiones
- Redirección automática después del login

## 🎨 Características de UI/UX

- Diseño responsive (mobile-first)
- Animaciones suaves con Framer Motion
- Notificaciones toast para feedback del usuario
- Navegación intuitiva
- Iconografía moderna con Remix Icon

## 🚢 Deployment

### Build de producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview del build
```bash
npm run preview
```