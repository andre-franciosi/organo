import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

function Formulario() {

    const paises = [
        'Argentina',
        'Brasil',
        'Bélgica',
        'Alemanha',
        'Inglaterra'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar um card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Posição" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label = "País" itens={paises}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario