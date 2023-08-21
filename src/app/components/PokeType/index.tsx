import React from 'react'

type PokeTypeProps = {
  value: string
}

const PokeType = ({ value }: PokeTypeProps) => {
  const color = coloursMap[value as keyof typeof coloursMap] || '#777'

  return (
    <span
      className="font-medium border px-2.5 py-0.5 rounded"
      style={{
        color,
        borderColor: color
      }}
    >
      {value}
    </span>
  )
}

const coloursMap = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}

export default PokeType
