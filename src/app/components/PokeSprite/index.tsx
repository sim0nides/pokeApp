import React, { HtmlHTMLAttributes, useState } from 'react'

import Skeleton from '../Skeleton'

type PokeSpriteProps = {
  sprites: string | undefined
  size: number | string
  loading?: boolean
} & HtmlHTMLAttributes<HTMLImageElement>

const PokeSprite = ({ sprites, size, loading, ...props }: PokeSpriteProps) => {
  const [loadingSrc, setLoadingSrc] = useState(true)
  const [failed, setFailed] = useState(false)

  const onLoad = () => setLoadingSrc(false)

  const onError = () => {
    setLoadingSrc(false)
    setFailed(true)
  }

  const pokemonUrl = sprites ? toSpriteUrl(sprites) : undefined
  const showLoadingState = loading === true || (loadingSrc && !!pokemonUrl)
  const imgUrl = failed || !pokemonUrl ? '/question_mark.png' : pokemonUrl

  return (
    <>
      {loading || (
        <img
          src={imgUrl}
          style={{
            display: loadingSrc ? 'none' : 'inline-block',
            width: size
          }}
          {...props}
          onLoad={onLoad}
          onError={onError}
        />
      )}
      {showLoadingState && (
        <Skeleton
          className="rounded-2xl"
          style={{ width: size, height: size }}
        />
      )}
    </>
  )
}

const toSpriteUrl = (jsonString: string) => {
  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master'
  const sprites = JSON.parse(jsonString)
  const spritePath: string | undefined =
    sprites?.other?.['official-artwork']?.front_default
  if (spritePath) {
    return spritePath.replace('/media', baseUrl)
  }
  return undefined
}

export default PokeSprite
