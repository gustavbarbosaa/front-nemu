import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

export default function TableComponent({
  journey,
  onSelect,
  selected,
}: {
  journey: any[];
  onSelect: (j: any) => void;
  selected: string | null;
}) {
  return (
    <Table className="w-full border">
      <TableCaption>Lista de jornadas encontradas</TableCaption>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="w-[100px]">Session ID</TableHead>
          <TableHead>Primeiro Touchpoint</TableHead>
          <TableHead>Último Touchpoint</TableHead>
          <TableHead className="text-right">Touchpoints</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {journey.map((item) => (
          <TableRow
            key={item.sessionId}
            className={`cursor-pointer hover:bg-blue-50 ${selected === item.sessionId ? 'bg-blue-100' : ''}`}
            onClick={() => onSelect(item)}
          >
            <TableCell>
              <Badge className="w-full truncate">{item.sessionId}</Badge>
            </TableCell>
            <TableCell>{formatDate(item.touchpoints[0]?.createdAt)}</TableCell>
            <TableCell>{formatDate(item.touchpoints.at(-1)?.createdAt)}</TableCell>
            <TableCell className="text-right">{item.touchpoints.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
