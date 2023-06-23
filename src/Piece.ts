import { Aspirateur } from "./Aspirateur";

/**
 * Représente un objet Piece (pièce) contenant un aspirateur.
 */
export class Piece {
  /**
   * Liste des actions possibles : "D" (Droite), "G" (Gauche), "A" (Avancer).
   */
  static actions: String[] = ["D", "G", "A"];

  /**
   * La largeur de la pièce.
   */
  width: number;

  /**
   * La largeur de la pièce.
   */
  height: number;

  /**
   * L'objet Aspirateur présent dans la pièce.
   */
  aspirateur: Aspirateur;

  /**
   * Crée une instance de Piece.
   * @param width - La largeur de la pièce.
   * @param height - La largeur de la pièce.
   * @param aspirateur - L'objet Aspirateur présent dans la pièce.
   */
  constructor(width: number, height: number, aspirateur: Aspirateur) {
    this.width = width;
    this.height = height;
    this.aspirateur = aspirateur;
  }

  /**
   * Obtient la largeur de la pièce.
   * @returns La largeur de la pièce.
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * Obtient la largeur de la pièce.
   * @returns La largeur de la pièce.
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Obtient l'objet Aspirateur présent dans la pièce.
   * @returns L'objet Aspirateur présent dans la pièce.
   */
  getAspirateur(): Aspirateur {
    return this.aspirateur;
  }

  /**
   * Définit la largeur de la pièce.
   * @param width - La nouvelle largeur de la pièce.
   */
  setWidth(width: number): void {
    this.width = width;
  }

  /**
   * Définit la largeur de la pièce.
   * @param height - La nouvelle largeur de la pièce.
   */
  setHeight(height: number): void {
    this.height = height;
  }

  /**
   * Définit l'objet Aspirateur présent dans la pièce.
   * @param aspirateur - Le nouvel objet Aspirateur à placer dans la pièce.
   */
  setAspirateur(aspirateur: Aspirateur): void {
    this.aspirateur = aspirateur;
  }

  /**
   * Effectue une action simple sur l'aspirateur en fonction de l'action donnée.
   * @param action - L'action à effectuer (D, G ou A).
   * @throws Error si l'action n'est pas l'une des valeurs suivantes : D, G ou A.
   */
  doSingleAction(action: string): void {
    if (!Piece.actions.includes(action))
      throw new Error("L'action doit être D, G ou A");
    if (action === "D") {
      if (this.aspirateur.getOrientation() === "N")
        this.aspirateur.setOrientation("E");
      else if (this.aspirateur.getOrientation() === "E")
        this.aspirateur.setOrientation("S");
      else if (this.aspirateur.getOrientation() === "S")
        this.aspirateur.setOrientation("W");
      else if (this.aspirateur.getOrientation() === "W")
        this.aspirateur.setOrientation("N");
    }
    if (action === "G") {
      if (this.aspirateur.getOrientation() === "N")
        this.aspirateur.setOrientation("W");
      else if (this.aspirateur.getOrientation() === "W")
        this.aspirateur.setOrientation("S");
      else if (this.aspirateur.getOrientation() === "S")
        this.aspirateur.setOrientation("E");
      else if (this.aspirateur.getOrientation() === "E")
        this.aspirateur.setOrientation("N");
    }
    if (action === "A") {
      if (this.aspirateur.getOrientation() === "N") {
        if (this.aspirateur.getY() + 1 < this.height)
          this.aspirateur.setY(this.aspirateur.getY() + 1);
        else throw new Error("L'aspirateur ne peut pas sortir de la pièce");
      } else if (this.aspirateur.getOrientation() === "E") {
        if (this.aspirateur.getX() + 1 < this.width)
          this.aspirateur.setX(this.aspirateur.getX() + 1);
        else throw new Error("L'aspirateur ne peut pas sortir de la pièce");
      } else if (this.aspirateur.getOrientation() === "S") {
        if (this.aspirateur.getY() - 1 >= 0)
          this.aspirateur.setY(this.aspirateur.getY() - 1);
        else throw new Error("L'aspirateur ne peut pas sortir de la pièce");
      } else if (this.aspirateur.getOrientation() === "W") {
        if (this.aspirateur.getX() - 1 >= 0)
          this.aspirateur.setX(this.aspirateur.getX() - 1);
        else throw new Error("L'aspirateur ne peut pas sortir de la pièce");
      }
    }
  }

  /**
   * Effectue une série d'actions sur l'aspirateur en utilisant la méthode doSingleAction.
   * @param actions - Les actions à effectuer (une chaîne de caractères contenant D, G et A).
   */
  doMultipleActions(actions: string): void {
    for (let i = 0; i < actions.length; i++) {
      this.doSingleAction(actions[i]);
    }
  }
}
