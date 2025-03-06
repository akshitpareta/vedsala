import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LeaderboardEntry {
  rank: number
  user: {
    name: string
    avatar: string
  }
  points: number
}

interface LeaderboardProps {
  entries: LeaderboardEntry[]
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry) => (
          <TableRow key={entry.rank} className={entry.rank <= 3 ? "font-medium" : ""}>
            <TableCell className="font-medium">
              {entry.rank <= 3 ? (
                <span className="inline-block w-6 h-6 rounded-full bg-primary text-primary-foreground text-center leading-6">
                  {entry.rank}
                </span>
              ) : (
                entry.rank
              )}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                <AvatarFallback>{entry.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              {entry.user.name}
            </TableCell>
            <TableCell className="text-right">{entry.points.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

