import "./Header.css"

function Header(){
    // 1. Array de objetos: adicionando a URL de destino (href)
    let links = [
        // O link Home pode ser um link interno (âncora #)
        { nome: "Home", href: "#home" }, 
        
        // Link para o seu LinkedIn (exemplo)
        { nome: "Sobre mim", href: "https://www.linkedin.com/feed/" }, 
        
        // Link para o seu GitHub (exemplo)
        { nome: "Projetos", href: "https://github.com/Casotti10" } 
    ];

    return( 
        <header className="header">
            <h1>Casotti</h1>
            <ul className="links">
                {
                    // 2. Mapeamento usando o objeto (linkDaVez)
                    links.map((linkDaVez) => { 
                        return (
                            <li key={linkDaVez.nome}>
                                <a 
                                    href={linkDaVez.href}
                                    // Adiciona target="_blank" para abrir em nova aba
                                    target="_blank"
                                    // Boa prática de segurança para target="_blank"
                                    rel="noopener noreferrer" 
                                > 
                                    {linkDaVez.nome} 
                                </a> 
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}

export default Header;