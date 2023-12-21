export default function Page({ params }: { params: { slug: string } }) {
    return <div className="text-center text-3xl">My MenuId: {params.id}</div>
  }