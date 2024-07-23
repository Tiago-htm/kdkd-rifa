import { useState } from "react"
import Login  from "./Login"
import Modal from "./Modal"
const Header = () => {
    const [showModal, setShowModal] = useState(false) // para controlar a visibilidade da tela de login usando o modal

    const handleOpenModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault()
            setShowModal(true)
    } //para abrir

    
    const handleCloseModal = () => setShowModal(false) // pra fechar

     return(
        <>
     <header className="flex items-center justify-center bg-principal h-20">
        <div className="flex items-center justify-between max-w-6xl w-full">
            <picture id ="logoTipo" className="flex items-center justify-between w-20 drop-shadow">
                   <img src="/img/logo.png" alt="logo do site" />
                </picture>

                <div id="NomeDoSite">
                        <h2 className="font-destaqueT text-secundario bold text-7xl">Kade Rifas</h2>
                </div>
                
                {/* o hamburgue vai ser para celular*/ }
                <div id="hamburgue">
                        <ul className="flex items-center gap-8 text-textoBranco font-medium " id="opcoes">
                            
                            <li  >
      
                                <a className="hover:text-secundario focus:underline focus:outline-none transition-all" href="Bilhetes">
                                    Bilhetes
                                </a>


                                
                                </li>
                            <li>

                                <a className="hover:text-secundario focus:underline focus:outline-none transition-all" href="Carrinho">
                                    Carrinho
                                </a>
                             </li>

                             <li>

                             <a className="hover:text-secundario focus:underline focus:outline-none transition-all" href="Login" onClick={handleOpenModal}>
                           
                                    Login
                                </a>
                             </li>
                            
                            
                        </ul>
                </div>
        </div>
    </header>
        <Modal show={showModal} onClose={handleCloseModal}>
            <Login />
        </Modal>
        </>
    )

}


export default Header