
const Cadastrar = () => {
    return(
        <>
        <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
           <div className="w-full max-w-lg">
                <div className="leading-loose">
                <form className="max-w-sm  m-4 p-10 bg-principal bg-opacity-60 rounded shadow-xl">
                    <p className="text-white font-medium text-center text-lg bold capitalize md:uppercase">Cadastrar</p>
                    <div>
                        <label className="block text-sm text-textoBranco " id="email" htmlFor="email">E-mail</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" id="email" placeholder="digite o seu e-mail" />
                    </div>
                    <div>
                        <label className="block text-sm text-textoBranco " id="nome" htmlFor="nome">Nome</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  id="nome" placeholder="digite o seu nome" />
                    </div>
                    <div>
                        <label className="block text-sm text-textoBranco " id="data" htmlFor="data">Data de nascimento</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type ="date"  id="data" placeholder="digite o seu data" />
                    </div>
                    <div>
                        <label className="block text-sm text-textoBranco " id="senha" htmlFor="senha">Senha</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white "type="password" id="senha" placeholder="digite sua senha"/>
                    </div>
                    <div>
                        <label className="block text-sm text-textoBranco " id="Confsenha" htmlFor="Confirmarsenha"> Confirmar Senha</label> 
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white "type="password" id="Confsenha" placeholder="digite sua senha novamente"/>
                    </div>

                    <div className="mt-4 items-center flex justify-between">
                        <button className="px-4 w-max py-1 text-white font-light tracking-wider bg-secundario hover:bg-secundario bg-opacity-75 rounded"
                        type="submit">Cadastrar</button>

                
                    </div>
           


                
                </form>
                
            </div>
            </div>

        </div>
        </div>
        
        
        </>
    )
}

export default Cadastrar;

