# Basisimage 
FROM node:16 

# Arbeitsverzeichnis festlegen
WORKDIR /app  

# Quellcode kopieren
COPY . .

# In Router-Verzeichnis wechseln
WORKDIR /app/mongodb/router  

# Abhängigkeiten installieren
RUN npm install

# Port freigeben
EXPOSE 3000  

# Server starten 
CMD ["node", "server.js"]