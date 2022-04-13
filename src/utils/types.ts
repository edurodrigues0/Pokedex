type Type = [
  'Grass',
  'Fire',
  'Water',
  'Rock',
  'Bug',
  'Dragon',
  'Fairy',
  'Ice',
  'Ground',
  'Poison',
  'Psychic',
  'Normal',
  'Fighting',
  'Electric',
  'Flying',
  'Ghost',
  'Dark'
]

type Prev_Evolutions = [{
  id: number;
  num: string;
  name: string;
  image: string;
}]

type Next_Evolutions = [{
  id: number;
  num: string;
  name: string;
  image: string;
}]

type Gender = [
  "Male",
  "Female"
]

export interface Pokemon {
  id: number;
  num: string;
  name: string;
  image: string;
  abilities: string;
  category: string;
  genders: Gender;
  type: Type;
  weaknesses: Type;
  height: string;
  weight: string;
  prev_evolution?: Prev_Evolutions;
  next_evolution?: Next_Evolutions;
}