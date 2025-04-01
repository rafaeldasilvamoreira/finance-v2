

export function PanelPage() {

  return (
    <div className="flex flex-col h-screen mx-10 gap-4">
      <div className="pt-4">
        <h1 className="text-2xl font-semibold">Olá, Rafael</h1>
        <h2 className="text-gray-400">Bem-vindo de volta!</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className=" flex basis-64 bg-white shadow-md rounded-xl max-w-1/4 p-4">
          <div>
            <h1 className="font-semibold text-2xl">R$ 2.000,00</h1>
            <h2 className="text-gray-400">Estradas do mês</h2>
          </div>
        </div>
        <div className=" flex basis-64 bg-white shadow-md rounded-xl max-w-1/4 p-4">
          <div>
            <h1 className="font-semibold text-2xl">R$ 900,00</h1>
            <h2 className="text-gray-400">Estradas do mês</h2>
          </div>
        </div>
        <div className=" flex basis-64 bg-white shadow-md rounded-xl max-w-1/4 p-4">
          <div>
            <h1 className="font-semibold text-2xl">R$ 1.100,00</h1>
            <h2 className="text-gray-400">Poupado no mês</h2>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl  p-4">
        <div className="flex justify-between items-center">
          <div >
            <h1 className="text-2xl font-semibold">R$ 2.000,00</h1>
            <h2 className="text-gray-400">Balanço financeiro</h2>
          </div>
          <div className="flex gap-4 text-gray-400">
            <div>
              <h2>Início</h2>
              <input className="border rounded-md p-1" type="date" />
            </div>
            <div>
              <h2>Fim</h2>
              <input className="border rounded-md p-1" type="date" />
            </div>
          </div>
        </div>
        <div>
          Grafico
        </div>

      </div>
    </div>
  )
}


