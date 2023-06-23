/**
 * Représente un objet Aspirateur.
 */
export class Aspirateur {
  /**
   * Liste des orientations possibles : "N" (Nord), "E" (Est), "W" (Ouest), "S" (Sud).
   */
  static orientations: String[] = ["N", "E", "W", "S"];

  /**
   * La coordonnée x de la position de l'Aspirateur.
   */
  x: number;

  /**
   * La coordonnée y de la position de l'Aspirateur.
   */
  y: number;

  /**
   * L'orientation de l'Aspirateur.
   * Peut être l'une des suivantes : "N" (Nord), "E" (Est), "W" (Ouest), "S" (Sud).
   */
  orientation: string;

  /**
   * Crée une instance de Aspirateur.
   * @param x - La coordonnée x de la position de l'Aspirateur.
   * @param y - La coordonnée y de la position de l'Aspirateur.
   * @param orientation - L'orientation de l'Aspirateur.
   * @throws Error si x ou y est négatif, ou si l'orientation n'est pas l'une des valeurs suivantes : "N", "E", "W" ou "S".
   */
  constructor(x: number, y: number, orientation: string) {
    if (x < 0 || y < 0 || !Aspirateur.orientations.includes(orientation)) {
      throw new Error(
        "x et y doivent être positifs et l'orientation doit être N, E, W ou S"
      );
    }
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  /**
   * Obtient la valeur de la coordonnée x.
   * @returns La coordonnée x de l'Aspirateur.
   */
  getX(): number {
    return this.x;
  }

  /**
   * Obtient la valeur de la coordonnée y.
   * @returns La coordonnée y de l'Aspirateur.
   */
  getY(): number {
    return this.y;
  }

  /**
   * Obtient l'orientation de l'Aspirateur.
   * @returns L'orientation de l'Aspirateur.
   */
  getOrientation(): string {
    return this.orientation;
  }

  /**
   * Définit la valeur de la coordonnée x.
   * @param x - La nouvelle valeur de la coordonnée x.
   */
  setX(x: number): void {
    this.x = x;
  }

  /**
   * Définit la valeur de la coordonnée y.
   * @param y - La nouvelle valeur de la coordonnée y.
   */
  setY(y: number): void {
    this.y = y;
  }

  /**
   * Définit l'orientation de l'Aspirateur.
   * @param orientation - La nouvelle orientation de l'Aspirateur.
   */
  setOrientation(orientation: string): void {
    this.orientation = orientation;
  }
}
