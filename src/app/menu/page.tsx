export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Menu: {params.slug}</div>
  }