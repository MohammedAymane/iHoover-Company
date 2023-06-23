import { Aspirateur } from "./Aspirateur";
import { Piece } from "./Piece";

function main() {
  let aspirateur: Aspirateur = new Aspirateur(5, 5, "N");
  let piece: Piece = new Piece(10, 10, aspirateur);
  let actions: string = "DADADADAA";
  piece.doMultipleActions(actions);
  console.log(
    `la position de l'aspirateur est : (${piece.getAspirateur().getX()},${piece
      .getAspirateur()
      .getY()},${piece.getAspirateur().getOrientation()})
      `
  );
}

main();
