import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public id: number;
  public name: string;
  public source: string;
  public description: string;
  public imagePath: string;
  public prepTimeHours: number;
  public prepTimeMinutes: number;
  public ingredients: Ingredient[];

  constructor(id: number, name: string,source:string, desc: string, imagePath: string, prepTimeMinutes: number, prepTimeHours: number, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.description = desc;
    this.imagePath = imagePath;
    this.prepTimeHours = prepTimeHours;
    this.prepTimeMinutes = prepTimeMinutes;
    this.ingredients = ingredients;
  }
}
