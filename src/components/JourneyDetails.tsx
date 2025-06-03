import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getSourceDistribution, formatDate } from "@/lib/utils"

export default function JourneyDetailComponent({ journey }: { journey: any }) {
  const distribution = getSourceDistribution(journey.touchpoints)

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Session ID</CardTitle>
        <CardDescription className="text-xs text-gray-700 break-all">{journey.sessionId}</CardDescription>
        <CardDescription className="mt-1">
          Duração: {formatDate(journey.touchpoints[0]?.createdAt)} – {formatDate(journey.touchpoints.at(-1)?.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium text-sm text-gray-700 mb-2">Distribuição por canal</p>
          {distribution.map((item) => (
            <div key={item.source}>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{item.source}</span>
                <span>{item.percent}%</span>
              </div>
              <Progress value={item.percent} />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        Total de touchpoints: {journey.touchpoints.length}
      </CardFooter>
    </Card>
  )
}
