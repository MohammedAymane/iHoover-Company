import { Aspirateur } from "./Aspirateur";
import { Piece } from "./Piece";
import * as readline from "readline";

/**
 * Fonction principale qui gère l'exécution du programme.
 */
function main() {
  /**
   * Crée une interface de lecture/écriture pour lire depuis l'entrée standard (stdin) et écrire vers la sortie standard (stdout).
   */
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  /**
   * Demande à l'utilisateur d'entrer la largeur de la pièce.
   */
  rl.question("largeur : ", (width) => {
    /**
     * Demande à l'utilisateur d'entrer la hauteur de la pièce.
     */
    rl.question("hauteur : ", (height) => {
      /**
       * Demande à l'utilisateur d'entrer la position x de l'aspirateur dans la pièce.
       */
      rl.question("x : ", (x) => {
        /**
         * Demande à l'utilisateur d'entrer la position y de l'aspirateur dans la pièce.
         */
        rl.question("y : ", (y) => {
          /**
           * Demande à l'utilisateur d'entrer l'orientation de l'aspirateur.
           */
          rl.question("orientation : ", (orientation) => {
            /**
             * Crée un nouvel objet Aspirateur en utilisant les valeurs entrées par l'utilisateur.
             */
            let aspirateur: Aspirateur = new Aspirateur(
              parseInt(x),
              parseInt(y),
              orientation
            );

            /**
             * Crée un nouvel objet Piece en utilisant les valeurs entrées par l'utilisateur et l'objet Aspirateur créé précédemment.
             */
            let piece: Piece = new Piece(
              parseInt(width),
              parseInt(height),
              aspirateur
            );

            /**
             * Fonction récursive qui demande à l'utilisateur d'entrer les actions à effectuer sur l'aspirateur.
             */
            let askActions = () => {
              rl.question("actions : ", (actions) => {
                /**
                 * Effectue les actions sur l'objet Piece en utilisant la méthode doMultipleActions.
                 */
                piece.doMultipleActions(actions);

                /**
                 * Affiche la position et l'orientation actuelle de l'aspirateur.
                 */
                console.log(
                  `la position de l'aspirateur est : (${piece
                    .getAspirateur()
                    .getX()},${piece.getAspirateur().getY()},${piece
                    .getAspirateur()
                    .getOrientation()})
                    `
                );

                /**
                 * Appelle récursivement la fonction askActions pour demander de nouvelles actions.
                 */
                askActions();
              });
            };

            /**
             * Appelle la fonction askActions pour commencer à demander les actions à l'utilisateur.
             */
            askActions();
          });
        });
      });
    });
  });
}

/**
 * Appelle la fonction principale pour démarrer le programme.
 */
main();
