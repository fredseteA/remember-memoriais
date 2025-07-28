import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C12.5523 2 13 2.44772 13 3V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H11V3C11 2.44772 11.4477 2 12 2Z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Memorial Digital</h1>
          <p className="text-xl text-gray-600">Preservando memórias para sempre</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Memoriais Disponíveis</h2>

          <div className="space-y-4">
            <Link
              href="/memorial/fulano"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-blue-600">Fulano da Silva</h3>
              <p className="text-gray-600">23/05/1950 - 15/03/2024</p>
            </Link>

            <Link
              href="/memorial/exemplo"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-blue-600">Template de Exemplo</h3>
              <p className="text-gray-600">Use este template para criar novos memoriais</p>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Como criar um novo memorial:</h3>
            <ol className="text-blue-700 space-y-1 text-sm">
              <li>
                1. Copie o arquivo <code className="bg-blue-100 px-1 rounded">pages/memorial/exemplo.tsx</code>
              </li>
              <li>
                2. Renomeie para <code className="bg-blue-100 px-1 rounded">pages/memorial/novo-nome.tsx</code>
              </li>
              <li>
                3. Edite os dados no objeto <code className="bg-blue-100 px-1 rounded">memorialData</code>
              </li>
              <li>
                4. Acesse em <code className="bg-blue-100 px-1 rounded">/memorial/novo-nome</code>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
