# Guagamole
## Installation de guacamole
Lancer le script script-installation-automatique-guacamole.sh

Le site est alors disponible à "IPmachine:8080/guacamole", pour le faire passer sur le port 80, lancer le script jetty8_port80.sh

## Gérer les utilisateurs et machines
Gestions des utilisateurs et machines dans le fichier  /usr/share/jetty8/.guacamole/user-mapping.xml.

Dans le dossier utilisateurs, le fichier user-mapping.xml en est un exemple. Les fichiers 
 1.user-mapping-SSH.xml
 2.user-mapping-VNC.xml
 3.user-mapping-RDP.xml
explicite la construction pour ces différents protocoles.
