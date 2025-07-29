import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
       <div className="w-full bg-blue-300 text-center py-10 mb-8">
          {/* Este div interno mantém o conteúdo (logo, título, subtítulo) centralizado horizontalmente */}
          {/* dentro do banner de largura total, com padding lateral */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="w-31 h-31 mx-auto mb-0 mt-0 flex items-center justify-center"> {/* Container para a logo */}
              <img
                src="/logo-sem-fundo.png"
                alt="logo remember"
                className="max-w-full max-h-full object-contain" 
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Memorial Digital</h1> {/* Título em branco para contraste */}
            <p className="text-xl text-blue-900">Preservando memórias para sempre</p> {/* Subtítulo em azul escuro para contraste */}
          </div>
        </div>
      <div className="max-w-4xl mx-auto px-4">
        

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Memoriais Disponíveis</h2>

          <div className="space-y-4">
            <Link
              href="/memorial/joca"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-blue-600">João Victor (Joca)</h3>
              <p className="text-gray-600">09/10/1913 - 09/10/1978</p>
            </Link>

            <Link
              href="/memorial/lalae"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-blue-600">Geralda Leão (Lalae)</h3>
              <p className="text-gray-600">13/06/1918 - 15/03/2008</p>
            </Link>
          </div>

          {/*COMO CRIAR NOVO MEMORIAL E ADICIONAR A ROTA*/}
          {/*
                1. Copie o arquivo <code className="bg-blue-100 px-1 rounded">pages/memorial/exemplo.tsx</code>
              
                2. Renomeie para <code className="bg-blue-100 px-1 rounded">pages/memorial/novo-nome.tsx</code>
              
                3. Edite os dados no objeto <code className="bg-blue-100 px-1 rounded">memorialData</code>
              
                4. Acesse em <code className="bg-blue-100 px-1 rounded">/memorial/novo-nome</code>
            */}
            
        </div>
      </div>
    </div>
  )
}
