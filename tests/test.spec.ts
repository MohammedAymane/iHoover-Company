// Importe les classes Piece et Aspirateur depuis les fichiers correspondants
import { Piece } from "../src/Piece";
import { Aspirateur } from "../src/Aspirateur";

// Définit un test pour vérifier le comportement de la méthode doMultipleActions
test("doMultipleActions devrait effectuer les actions DADADADAA", () => {
  // Crée une instance de la classe Piece avec une largeur de 10, une largeur de 10 et un aspirateur aux coordonnées (5, 5) orienté vers le Nord
  let piece: Piece = new Piece(10, 10, new Aspirateur(5, 5, "N"));

  // Effectue les actions "DADADADAA" sur l'objet Piece
  piece.doMultipleActions("DADADADAA");

  // Vérifie que les coordonnées de l'aspirateur sont correctes après l'exécution des actions
  expect(piece.getAspirateur().getX()).toBe(5);
  expect(piece.getAspirateur().getY()).toBe(6);
  expect(piece.getAspirateur().getOrientation()).toBe("N");
});
