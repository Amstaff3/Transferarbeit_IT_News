# Basisimage 
FROM node:16 

# Arbeitsverzeichnis festlegen
WORKDIR /app  

# Quellcode kopieren
COPY package*.json ./

# In Router-Verzeichnis wechseln
WORKDIR /app/mongodb/router  

# Abhängigkeiten installieren
RUN npm install

# Kopieren lokalen Code in den Container
COPY . .

# Port freigeben
EXPOSE 3000  

# Server starten 
CMD ["node", "server.js"]