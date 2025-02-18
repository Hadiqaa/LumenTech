import Image from "next/image"


export function DashboardImage() {
  return (
    <section className="container my-10 py-8">
        <div className="w-full relative">
            <Image src="/dashboardimage.png" alt="LumanTech Dashboard" className="h-full w-full object-cover" width={600} height={400}/>
        </div>
    </section>
  )
}