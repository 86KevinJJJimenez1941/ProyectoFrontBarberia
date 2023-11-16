# Usa la imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app/proyecto

# Copia el package.json y package-lock.json a /app/proyecto
COPY proyecto/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY proyecto/ .

# Compila la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]