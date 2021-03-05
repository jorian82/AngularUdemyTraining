export class Recipe {
  public _id: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(_id: string, name: string, description: string, imagePath: string) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
