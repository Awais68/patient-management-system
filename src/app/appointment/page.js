


import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { columns } from "@/components/AppointmentTable/columns";
import { appointments } from "@/lib/section";



export default function Appointments( ){
    return(
        <div className="container mx-auto ">
            <h1 className="text-4xl ">Appointments</h1>
            <AppointmentTable columns={columns} data={appointments}/>
          
            

        </div>
    )
}