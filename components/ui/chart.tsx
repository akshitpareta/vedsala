"use client"

import { Bar, BarChart as BaseBarChart, Line, LineChart as BaseLineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ChartProps {
  data: {
    name: string
    value: number
  }[]
}

export function BarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BaseBarChart data={data}>
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} />
        <Bar dataKey="value" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BaseBarChart>
    </ResponsiveContainer>
  )
}

export function LineChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BaseLineChart data={data}>
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} />
        <Line type="monotone" dataKey="value" stroke="currentColor" strokeWidth={2} dot={false} className="stroke-primary" />
      </BaseLineChart>
    </ResponsiveContainer>
  )
}

