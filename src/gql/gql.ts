/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetPokemon($id: Int!) {\n  pokemon_v2_pokemon_by_pk(id: $id) {\n    id\n    name\n    height\n    weight\n    base_experience\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonabilities {\n      id\n      pokemon_v2_ability {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonstats {\n      id\n      base_stat\n      pokemon_v2_stat {\n        id\n        name\n      }\n    }\n  }\n}": types.GetPokemonDocument,
    "query GetPokemons($offset: Int!, $limit: Int!, $orderBy: [pokemon_v2_pokemon_order_by!], $where: pokemon_v2_pokemon_bool_exp) {\n  pokemon_v2_pokemon(\n    limit: $limit\n    offset: $offset\n    order_by: $orderBy\n    where: $where\n  ) {\n    id\n    name\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n  }\n  pokemon_v2_pokemon_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetPokemonsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPokemon($id: Int!) {\n  pokemon_v2_pokemon_by_pk(id: $id) {\n    id\n    name\n    height\n    weight\n    base_experience\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonabilities {\n      id\n      pokemon_v2_ability {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonstats {\n      id\n      base_stat\n      pokemon_v2_stat {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetPokemon($id: Int!) {\n  pokemon_v2_pokemon_by_pk(id: $id) {\n    id\n    name\n    height\n    weight\n    base_experience\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonabilities {\n      id\n      pokemon_v2_ability {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonstats {\n      id\n      base_stat\n      pokemon_v2_stat {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPokemons($offset: Int!, $limit: Int!, $orderBy: [pokemon_v2_pokemon_order_by!], $where: pokemon_v2_pokemon_bool_exp) {\n  pokemon_v2_pokemon(\n    limit: $limit\n    offset: $offset\n    order_by: $orderBy\n    where: $where\n  ) {\n    id\n    name\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n  }\n  pokemon_v2_pokemon_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query GetPokemons($offset: Int!, $limit: Int!, $orderBy: [pokemon_v2_pokemon_order_by!], $where: pokemon_v2_pokemon_bool_exp) {\n  pokemon_v2_pokemon(\n    limit: $limit\n    offset: $offset\n    order_by: $orderBy\n    where: $where\n  ) {\n    id\n    name\n    pokemon_v2_pokemonsprites {\n      id\n      sprites\n    }\n    pokemon_v2_pokemontypes {\n      id\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n  }\n  pokemon_v2_pokemon_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;