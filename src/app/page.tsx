

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="w-full ">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-slate-300 font-bold">Hello there</h1>
      <p className="mb-5 text-slate-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Menu</button>
    </div>
  </div>
</div>
       </section>
    </main>
  )
}
