const fs = require('fs');
const path = require('path');

function lireFichierLog(nomFichier = 'log.txt') {
  const cheminFichier = path.join(__dirname, nomFichier);

  fs.readFile(cheminFichier, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err.message);
      return;
    }

    console.log('Contenu du fichier log.txt :\n');
    console.log(data);
  });
}

// Appel de la fonction
lireFichierLog();