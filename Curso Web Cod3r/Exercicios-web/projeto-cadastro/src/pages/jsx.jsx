import Layout from "../components/Layout"
export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1>
    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo JSX">
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Maria', idade: 21})}
            </p>
        </Layout>
    )
}