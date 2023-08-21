import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import PokeSprite from '@/app/components/PokeSprite'
import { GetPokemonDocument } from '@/gql/graphql'
import appTitle from '@/helpers/appTitle'
import { normalizeKebabCase } from '@/helpers/formatters'

import AttributesCard from './AttributesCard'
import StatsCard from './StatsCard'
import Title from './Title'

const PokeDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  const { data, loading, error } = useQuery(GetPokemonDocument, {
    variables: { id: +id! }
  })

  const pokeName = normalizeKebabCase(data?.pokemon_v2_pokemon_by_pk?.name)
  const pokeSprites =
    data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonsprites?.[0].sprites
  const pokeHeight = data?.pokemon_v2_pokemon_by_pk?.height
  const pokeWeight = data?.pokemon_v2_pokemon_by_pk?.weight
  const pokeBaseExp = data?.pokemon_v2_pokemon_by_pk?.base_experience
  const pokeAbilities =
    data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonabilities.flatMap((i) =>
      i.pokemon_v2_ability ? [i.pokemon_v2_ability.name] : []
    )
  const pokeTypes =
    data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemontypes.flatMap((i) =>
      i.pokemon_v2_type ? [i.pokemon_v2_type.name] : []
    )
  const pokeStats =
    data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonstats.flatMap((i) =>
      i.pokemon_v2_stat
        ? [
            {
              id: i.pokemon_v2_stat.id,
              name: i.pokemon_v2_stat.name,
              value: i.base_stat
            }
          ]
        : []
    )

  const abilitiesCardProps = {
    height: pokeHeight,
    weight: pokeWeight,
    baseExperience: pokeBaseExp,
    abilities: pokeAbilities,
    types: pokeTypes
  }

  const notFound = !!error || (!loading && !data?.pokemon_v2_pokemon_by_pk)

  return (
    <>
      <Helmet>{pokeName && <title>{appTitle(pokeName)}</title>}</Helmet>

      <div className="bg-gray-700 rounded-lg px-14 py-7">
        {notFound ? (
          <h1 className="text-center text-5xl font-bold">
            {t('pokeDetail.notFound')}
          </h1>
        ) : (
          <>
            <Title loading={loading}>{pokeName}</Title>
            <div className="flex">
              <PokeSprite
                loading={loading}
                sprites={pokeSprites}
                size="20rem"
              />
              <AttributesCard loading={loading} {...abilitiesCardProps} />
            </div>
            <StatsCard loading={loading} stats={pokeStats} />
          </>
        )}
      </div>
    </>
  )
}

export default PokeDetail
