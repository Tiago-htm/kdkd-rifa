import { useState } from "react"
import Modal from "./Modal"
import Cadastrar from "./Cadastrar";


const Login = () => {


    const [showModal, setShowModal] = useState(false) // para controlar a visibilidade da tela de login usando o modal

    const handleOpenModal = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault()
            setShowModal(true)
    } //para abrir

    
    const handleCloseModal = () => setShowModal(false) // pra fechar

    return(
        <>
        <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
           <div className="w-full max-w-lg">
                <div className="leading-loose">
                {!showModal && (
                    <form className="max-w-sm  m-4 p-10 bg-principal bg-opacity-60 rounded shadow-xl">
                    <p className="text-white font-medium text-center text-lg bold capitalize md:uppercase">Login</p>
                    <div>
                        <label className="block text-sm text-textoBranco " id="email">E-mail</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" id="email" placeholder="digite o seu e-mail" />
                    </div>
                    <div>
                        <label className="block text-sm text-textoBranco " id="senha">Senha</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white "type="password" id="senha" placeholder="digite sua senha"/>
                    </div>

                    <div className="mt-4 items-center flex justify-between">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-secundario hover:bg-secundario bg-opacity-75 rounded"
                        type="submit">Enter</button>

                        <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-textoPretoo hover:text-textoVermelho text-opacity-75 transition-all " href="#">
                            Esqueceu a senha?
                        </a>
                    </div>
                    <div className="text-center">
                        <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-principal hover:text-secundario  transition-all " href="#"  onClick={handleOpenModal}>
                            Criar uma conta
                        </a>

                     
                    </div>


                
                </form>
                
                )}
                
            </div>
            </div>

        </div>
        </div>
        <>
        <Modal show={showModal} onClose={handleCloseModal}>
            <Cadastrar/>
        </Modal>
        </>
        
        </>
    )
}

export default Login;


{/* 
     “Na natureza nada se cria, nada se perde, tudo se transforma”       
        
                Obrigado, wesllycode

*/}