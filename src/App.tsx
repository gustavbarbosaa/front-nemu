import { useEffect, useState } from 'react'
import { api } from './lib/api'
import TableComponent from './components/TableComponent'
import JourneyDetailComponent from './components/JourneyDetails'
import CardComponent from './components/CardComponent'

export default function App() {
  const [journeys, setJourneys] = useState<any[]>([])
  const [selectedJourney, setSelectedJourney] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/').then((res) => {
      setJourneys(res.data)
      setLoading(false)
    }).catch((err) => {
      console.error(err)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="p-8 text-center text-gray-500">Carregando...</div>

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardComponent title="Total de jornadas" countJourneys={journeys.length} />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Jornadas</h2>
          <TableComponent journey={journeys} onSelect={setSelectedJourney} selected={selectedJourney?.sessionId} />
        </div>

        <div className="md:w-[400px] w-full">
          {selectedJourney ? (
            <JourneyDetailComponent journey={selectedJourney} />
          ) : (
            <div className="text-gray-500 italic p-4 border rounded-md bg-white">Selecione uma jornada para ver os detalhes</div>
          )}
        </div>
      </div>
    </div>
  )
}
