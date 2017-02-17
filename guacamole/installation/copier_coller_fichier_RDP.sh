#!/bin/bash
sudo su

##recuperation des fichiers et creation des liens symboliques necessaires
mkdir /usr/lib/x86_64-linux-gnu/freerdp/

## on cherche les fichiers existant en retirant ceux dans le /home
lien1=$(find / -name guacdr-client.so | grep -v home)
lien2=$(find / -name guacsnd-client.so | grep -v home)

ln -s $lien1 /usr/lib/x86_64-linux-gnu/freerdp/guacdr-client.so
ln -s $lien2 /usr/lib/x86_64-linux-gnu/freerdp/guacsnd-client.so
