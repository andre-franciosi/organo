import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

function Formulario(props) {

    const paises = [
        'Argentina',
        'Brasil',
        'Bélgica',
        'Alemanha',
        'Inglaterra'
    ]



    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numero, setNumero] = useState('')
    const [imagem, setImagem] = useState('')
    const [pais, setPais] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado ({
            nome,
            posicao,
            imagem,
            pais
        })
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar um card</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome" 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Posição" 
                    placeholder="Digite a posição" 
                    valor = {posicao}
                    aoAlterado = {valor => setPosicao(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Número" 
                    placeholder="Digite o número da camisa" 
                    valor = {numero}
                    aoAlterado = {valor => setNumero(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = { valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label = "País" 
                    itens={paises}
                    valor = {pais}
                    aoAlterado = {valor => setPais(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario