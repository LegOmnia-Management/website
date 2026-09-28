#!/usr/bin/env bash
# Initialisation d'un VPS Ubuntu/Debian neuf. À lancer une seule fois, en root :
#   curl -fsSL https://raw.githubusercontent.com/... | bash   (ou scp puis bash setup-vps.sh)
set -euo pipefail

DEPLOY_USER=deploy
APP_DIR=/opt/legomnia

# Docker + plugin compose
curl -fsSL https://get.docker.com | sh

# Utilisateur de déploiement (utilisé par GitHub Actions en SSH)
id "$DEPLOY_USER" &>/dev/null || adduser --disabled-password --gecos "" "$DEPLOY_USER"
usermod -aG docker "$DEPLOY_USER"
mkdir -p /home/$DEPLOY_USER/.ssh
touch /home/$DEPLOY_USER/.ssh/authorized_keys
chmod 700 /home/$DEPLOY_USER/.ssh && chmod 600 /home/$DEPLOY_USER/.ssh/authorized_keys
chown -R $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/.ssh

# Dossier de l'application
mkdir -p "$APP_DIR"
chown $DEPLOY_USER:$DEPLOY_USER "$APP_DIR"

# Pare-feu : SSH + HTTP(S) uniquement
apt-get install -y ufw
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443
ufw --force enable

echo "OK. Reste à :"
echo " 1. ajouter la clé publique de déploiement dans /home/$DEPLOY_USER/.ssh/authorized_keys"
echo " 2. créer $APP_DIR/.env (modèle : deploy/env.example), chmod 600"
