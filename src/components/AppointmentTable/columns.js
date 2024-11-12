"use client"

import { ColumnDef } from "@tanstack/react-table"



export  const columns = [
  {
    accessorKey: "doctor.name",
    header: "Doctor Name",
  },
  {
    accessorKey: "user.name",
    header: "Patient",
  },
  {
    accessorKey: "appointmentDate",
    header: "Appointment Date ",
  },
  {
    accessorKey: "appointmentTime",
    header: "Appointment Time ",
  },
  {
    accessorKey: "status",
    header: "Status ",
  },
]
