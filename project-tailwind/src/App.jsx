import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className='bg-red-200'>Hola clase</h1>
        <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded m-5" onClick={() => window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
      </div>

      <div className="flex flex-col items-center justify-center">
          <table className="table-auto border-collapse border border-gray-800 w-full p-10 m-5">
            <thead className="bg-red-400 text-white">
              <tr>
                <th className="border border-white px-20 py-2">Nombre</th>
                <th className="border border-white px-20 py-2">País</th>
                <th className="border border-white px-4 py-2">Reseña</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-100 border border-white px-4 py-2">
                <td className="">Laura Kinsale</td>
                <td className="border border-white px-4 py-2">Misisipi, Estados Unidos</td>
                <td className="">Es una de las escritoras más reconocidas dentro de la literatura romántica</td>
              </tr>
              <tr className="bg-red-50 border border-white px-4 py-2">
                <td className="">Sherrilyn McQueen</td>
                <td className="border border-white px-4 py-2">Estados Unidos</td>
                <td className="">Escritora estadounidense de superventas. Con su nombre de casada Sherrilyn Kenyon escribe urban fantasy</td>
              </tr>
              <tr className="bg-red-100 border border-white px-4 py-2">
                <td className="">Jane Austin</td>
                <td className="border border-white px-4 py-2">FWinchester, Reino Unido</td>
                <td className="">Fue una novelista británica que vivió durante la época georgiana. Es considerada una importante escritora entre los clásicos de la novela inglesa</td>
              </tr>
            </tbody>
          </table>
      </div>
    </>
  )
}

export default App
