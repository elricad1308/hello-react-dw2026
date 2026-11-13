async function getData () {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    let data = await response.json()

    console.log(data)
}


function MyButton ({ onClick }) {
    return (
        <button onClick={ onClick } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Soy un botón
        </button>
    )
}

export default MyButton