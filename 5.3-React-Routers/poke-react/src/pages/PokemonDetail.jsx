import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()

  const [pokemonDetails, setPokemonDetails] = useState({})

  const apiVersion = 'v2'
  console.log(id)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/${apiVersion}/pokemon/${id}`)
      .then(response => response.json())
      .then(dataJson => {
        setPokemonDetails(dataJson)
        console.log(dataJson)
      })
      .catch(error => console.log(error))
  }, [id, apiVersion])

  return (
    <>
      <div>PokemonDetail</div>
      <h1>{pokemonDetails?.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      <table className='table'>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {pokemonDetails.stats?.map(stat => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default PokemonDetail
