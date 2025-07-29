"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

// TEMPLATE PARA NOVOS MEMORIAIS
// Copie este arquivo e renomeie para criar um novo memorial
// Edite os dados abaixo conforme necessário
// FUNÇÃO PARA CALCULAR A IDADE
function calcularIdade(dataNascimentoStr: string, dataFalecimentoStr?: string): string {
    const dataNascimento = new Date(dataNascimentoStr.split('/').reverse().join('-')); // Converte DD/MM/AAAA para AAAA-MM-DD
    let dataFalecimento: Date;

    if (dataFalecimentoStr) {
        dataFalecimento = new Date(dataFalecimentoStr.split('/').reverse().join('-'));
    } else {
        dataFalecimento = new Date(); // Se não há data de falecimento, usa a data atual (para pessoas vivas)
    }

    let idade = dataFalecimento.getFullYear() - dataNascimento.getFullYear();
    const mes = dataFalecimento.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && dataFalecimento.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    return `${idade} anos`;
}

const memorialData = {
  nome: "João Victor (Joca)",
  dataNascimento: "09/10/1913",
  dataFalecimento: "09/10/1978",
  // Se não quiser mostrar um campo, deixe vazio "" ou []
  localDescanso: "Cemitério Municipal de Iguatama, Iguatama - MG", 
  datasImportantes: [] as string[],
  profissao: "",
  religiao: "Católico",
  hobbies: [] as string[],
  qualidades: [] as string[],
  jeitoSer: "",
  frases: [] as string[],
  outrosDetalhes: `Filho de:
  José Victor Teles de Carvalho e Maria dos Anjos de Carvalho.`,
  biografia: `Teve 7 irmãos e foi criado por sua avó. Frequentou a escola até os 8 anos de idade. O que mais demonstrou aprender foi fruto de sua capacidade autodidata: tinha uma inteligência lógico-matemática ímpar, era bom negociador e empreendedor. Os cálculos para seus negócios eram feitos de cabeça, sem nenhum papel.
Casou-se com Geralda Leão de Carvalho (Lalae) na Paróquia de Nossa Senhora da Abadia em 30 de junho de 1939.
Na semana do seu casamento perguntou a sua noiva: 
- Você quer ser rica ou estudar seus filhos?
E ela prontamente respondeu:
- Estudar meus filhos.
O diálogo entre os noivos demonstrava o quanto proporcionar educação aos filhos era o desejo mais profundo daquele tempo onde instituições escolares eram de difícil acesso e o quanto o casal estava conectado nas conquistas que verdadeiramente importava, a religião e a cultura.
Tiveram 13 filhos num período de 20 anos e numa época onde se apresentava aos anticoncepcionais ao mercado, o sr. Joca jamais pensou em fazer o uso do método, mesmo após sua esposa ter graves problemas em partos. Confiaram na Providência Divina e até o 13° filho, no caso filha, Deus manteve íntegra a saúde de sua esposa.
No início do casamento alugaram uma fazenda da avó de sua esposa. Logo após, comprou 13 alqueires de terra e iniciaram a Fazenda São João.
Em 30 anos, ele a fez crescer até 300 alqueires, destes 300 alqueires, 80% margeava o Rio São Francisco. A sede da fazenda tinha uma casa excelente para os padrões da época, com água encanada.
Nesta fazenda, muito do que se precisava para subsistência, era produzido. Havia um moinho de água para o fubá, o engenho para a cana, matéria-prima da rapadura, prensa para fazer o polvilho, e farinha de mandioca. 
O Sr. Joca plantava milho, arroz, feijão, mandioca e cana. Criava porcos para abate e venda, criava também gado de corte e leite. Os cereais produzidos eram transportados em carros de boi e charretes de cavalo.
Para que seus filhos estudassem, os enviou para colégios internatos, depois, mudou-se para Bambuí, e vendo que ambas as experiências não foram positivas, fez uma parceria com outros fazendeiros locais para construir o Colégio Pio XII.
Em parceria, Sr. Joca e os fazendeiros também construíram o Clube Social para o lazer dos jovens da cidade. Sua vida financeira era muito boa, porém nunca ofereceu luxo ou facilidades aos filhos, ensinou o valor do trabalho e do estudo. Era um homem de poucas palavras, mas de palavras certas e firmes, o que prometia não voltava atrás e, portanto, considerado honrado entre seus pares. 
Era católico, atuante e piedoso, junto com sua esposa Lalae. Os princípios da Igreja Católica eram inegociáveis para ele.
Todo o primeiro bezerro macho nascido na fazenda São João era reservado para doar à festa de São Sebastião.
Sua devoção principal era a Nossa Senhora do Rosário, que o acompanhou em sua despedida desta terra no dia de sua festa, 7 de outubro, de forma repentina e prematura, com apenas 64 anos. Sua promessa de estudar seus filhos foi perfeitamente cumprida. Sua honestidade e retidão de caráter deixou um legado de força e competência para seus filhos, netos e bisnetos.
Seu nome é lembrado até os dias de hoje. Todos os membros de sua família são reconhecidos com a marca forte de seu nome. Nós somos do Joca. Somos a Jocada.
`,

  galeria: [{
      src: "/images/joca-foto1.jpeg",
      alt: "Foto de Joca",
    },] as Array<{ src: string; alt: string }>,

  // Altere o link para o memorial específico
  linkMemorial: "https://remember-memoriais.vercel.app/memorial/joca",
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="modal-image" />
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  children: React.ReactNode
  show?: boolean
}

function Card({ title, children, show = true }: CardProps) {
  if (!show) return null

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
      <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

// Componente QR Code simples usando API externa
function QRCodeComponent({ value, size = 128 }: { value: string; size?: number }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`

  return (
    <img
      src={qrUrl || "/placeholder.svg"}
      alt="QR Code"
      width={size}
      height={size}
      className="border border-gray-200 rounded"
    />
  )
}

export default function MemorialExemplo() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  // Calcular o subtítulo e a idade
  const subtituloDatas = `${memorialData.dataNascimento} - ${memorialData.dataFalecimento}`;
  const idadeCalculada = calcularIdade(memorialData.dataNascimento, memorialData.dataFalecimento);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="w-full bg-blue-300 text-center py-10 mb-8">
        {/* Este div interno mantém o conteúdo (logo, nome, subtítulo) centralizado horizontalmente
            dentro do banner de largura total, com padding lateral */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-31 h-31 mx-auto mb-0 mt-0 flex items-center justify-center"> {/* Aumentei o tamanho do container da logo */}
            <img
              src="/logo-sem-fundo.png" // <-- Certifique-se de que esta é a URL correta da sua logo
              alt="logo remember"
              className="max-w-full max-h-full object-contain" // Garante que a logo se ajuste ao container
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{memorialData.nome}</h1> {/* Nome com texto branco para contraste */}
          <p className="text-xl text-blue-900">{subtituloDatas}</p> {/* Exibe as datas */}
          <p className="text-lg text-blue-800 font-semibold">{idadeCalculada}</p> {/* Exibe a idade */}
        </div>
      </div>

        {/* Cards em duas colunas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Coluna 1 */}
          <div>
            <Card title="Local de Descanso" show={!!memorialData.localDescanso}>
              <p>{memorialData.localDescanso}</p>
            </Card>

            <Card title="Profissão" show={!!memorialData.profissao}>
              <p>{memorialData.profissao}</p>
            </Card>

            <Card title="Hobbies e Interesses" show={memorialData.hobbies.length > 0}>
              <ul className="space-y-1">
                {memorialData.hobbies.map((hobby, index) => (
                  <li key={index}>• {hobby}</li>
                ))}
              </ul>
            </Card>

            <Card title="Jeito de Ser" show={!!memorialData.jeitoSer}>
              <p>{memorialData.jeitoSer}</p>
            </Card>

            <Card title="Outros Detalhes" show={!!memorialData.outrosDetalhes}>
              <p>{memorialData.outrosDetalhes}</p>
            </Card>
          </div>

          {/* Coluna 2 */}
          <div>
            <Card title="Datas Importantes" show={memorialData.datasImportantes.length > 0}>
              <ul className="space-y-1">
                {memorialData.datasImportantes.map((data, index) => (
                  <li key={index}>• {data}</li>
                ))}
              </ul>
            </Card>

            <Card title="Religião" show={!!memorialData.religiao}>
              <p>{memorialData.religiao}</p>
            </Card>

            <Card title="Qualidades Marcantes" show={memorialData.qualidades.length > 0}>
              <ul className="space-y-1">
                {memorialData.qualidades.map((qualidade, index) => (
                  <li key={index}>• {qualidade}</li>
                ))}
              </ul>
            </Card>

            <Card title="Frases Marcantes" show={memorialData.frases.length > 0}>
              <ul className="space-y-1">
                {memorialData.frases.map((frase, index) => (
                  <li key={index}>"{frase}"</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Biografia - largura completa */}
        <Card title="Biografia" show={!!memorialData.biografia}>
          <div className="text-justify leading-relaxed whitespace-pre-line">{memorialData.biografia}</div>
        </Card>

        {/* Galeria de Memórias */}
        <Card title="Galeria de Memórias" show={memorialData.galeria.length > 0}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {memorialData.galeria.map((image, index) => (
              <div key={index} className="cursor-pointer" onClick={() => openModal(image.src, image.alt)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* QR Code */}
        <div className="flex justify-center mt-16 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <QRCodeComponent value={memorialData.linkMemorial} size={128} />
            </div>
            <p className="text-sm text-gray-600 mt-3">Escaneie para acessar este memorial</p>
          </div>
        </div>
      </div>

      {/* Modal para imagens */}
      {modalImage && (
        <ImageModal isOpen={!!modalImage} onClose={closeModal} imageSrc={modalImage.src} imageAlt={modalImage.alt} />
      )}
    </div>
  )
}
