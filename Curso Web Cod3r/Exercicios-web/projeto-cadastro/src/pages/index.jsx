import Navegador from '../components/Navegador'
export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador destino="/estiloso" texto="Estiloso"/>
      <Navegador destino="/exemplo" texto="Exemplo" cor="#C91D02"/>
      <Navegador destino="/jsx" texto="Jsx" cor="#1CC916" />
      <Navegador destino="/navegacao" texto="Navegacao #01" cor="#9A2AC9"/>
      <Navegador destino="/cliente/sp-3/123" texto="Navegacao #02" cor="#C93488"/>
      <Navegador destino="/estado" texto="Estado" cor="#7D3907"/>
      <Navegador destino="/integracao1" texto="Integração #01" cor="#01317D"/>
      <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#0E7D48"/>
    </div>
    )
}