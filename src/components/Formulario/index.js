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

    return (
        <section className="formulario">
            <form>
                <h2> Preencha os dados para criar um card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Posição" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label = "País" itens={paises}/>
            </form>
        </section>
    )
}

export default Formulario