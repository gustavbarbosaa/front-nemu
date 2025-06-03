import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardComponent({
  title,
  countJourneys,
}: {
  title: string
  countJourneys: number
}) {
  return (
    <Card className="bg-white shadow-sm border">
      <CardHeader>
        <CardTitle className="text-base text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-blue-600">{countJourneys}</p>
      </CardContent>
    </Card>
  )
}
