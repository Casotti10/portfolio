import "./Projetos.css";


function Projetos (props){ 
    const projetos = props.projetos
    return (
        <section className = "projetos-sessao">
            <h2>Projetos</h2>
            <ul className = "lista-projetos">

                {
                    projetos.map((projetoDaVez)=> {
                        return (
                            <li>
                                <a href={projetoDaVez.linkDoGithub}>Link do GitHub</a>
                                <img src={projetoDaVez.caminhoDaImagem} alt="" />
                            </li>
                        )
                    })

                }
            </ul>
        </section>
    )
}

export default Projetos;