import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold underline text-indigo-500/50">
        Notes App
      </h1>
      <p>Port: {process.env.NEXT_PUBLIC_DB_TEST}</p>
    </Layout>
  )
}
