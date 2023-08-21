import React from 'react'
import { Link } from 'react-router-dom'

import PokeSprite from '@/app/components/PokeSprite'
import PokeType from '@/app/components/PokeType'
import { normalizeKebabCase } from '@/helpers/formatters'

type RowProps = {
  pokemonId: number
  pokemonSprites?: string
  pokemonName: string
  pokemonTypes: string[]
}

const Row = ({
  pokemonId,
  pokemonSprites,
  pokemonName,
  pokemonTypes
}: RowProps) => {
  return (
    <tr>
      <td className="font-bold">
        <Link to={pokemonId.toString()} className="hover:underline">
          <PokeSprite
            sprites={pokemonSprites}
            size={'4rem'}
            className="inline-block me-5"
          />
          {normalizeKebabCase(pokemonName)}
        </Link>
      </td>
      <td>
        <div className="flex space-x-2">
          {pokemonTypes.map((i) => (
            <PokeType key={i} value={i} />
          ))}
        </div>
      </td>
    </tr>
  )
}

export default Row
