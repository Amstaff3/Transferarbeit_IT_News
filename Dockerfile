# Basisimage 
FROM node:18

# Arbeitsverzeichnis festlegen
WORKDIR /app  

# Quellcode kopieren
COPY . /app

# Abhängigkeiten installieren
RUN npm install

# Port freigeben
EXPOSE 3000  

# Server starten 
CMD ["node", "server.js"]