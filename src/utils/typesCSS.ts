// ${(props) => colors[props.activeColor]};

export interface BackgroundProps {
  activeColor: 'Grass'
  | 'Fire'
  | 'Water'
  | 'Bug'
  | 'Normal'
  | 'Poison'
  | 'Electric'
  | 'Ground'
  | 'Fairy'
  | 'Fighting'
  | 'Psychic'
  | 'Rock'
  | 'Ghost'
  | 'Ice'
  | 'Dragon'
  | 'Flying'
  | 'Dark';
}

export const colors = {
  Grass: '#78c850',
  Fire: '#F08030',
  Water: '#6890f0',
  Bug: '#A8B820',
  Normal: '#A8A878',
  Poison: '#A040A0',
  Electric: '#F8D030',
  Ground: '#E0C068',
  Fairy: '#EE99AC',
  Fighting: '#C03028',
  Psychic: '#F85888',
  Rock: '#B8A038',
  Ghost: '#705898',
  Ice: '#98D8D8',
  Dragon: '#7038F8',
  Flying: '#90AAD7',
  Dark: '#79726B',
}