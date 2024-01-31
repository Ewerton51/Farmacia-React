function Home() {
    return (
        <>
            <div
                id="container"
                className="bg-rose-900 flex justify-center relative"
            >
                <div
                    id="subcontainer"
                    className="container grid grid-cols-2 text-white"
                >
                    <div
                        id="texto"
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2 className=" text-5xl font-bold ">Seja bem-vindo a HockeyFarm! </h2>
                        <p className="text-xl">
                            Desconto em compras a partir de R$40,00!
                        </p>
                        <div
                            id="containterButton"
                            className="flex justify-around gap-4 w-1/2 text-center"
                        >
                            <div className="rounded text-rose-900 border-white bg-white border-solid border-2 px-4 py-2 flex-1">
                                Ver Produtos
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center">
                        <img
                            className="w-2/3"
                            src="https://logosmarcas.net/wp-content/uploads/2020/07/Pittsburgh-Penguins-Logotipo-1992-1999.jpg"
                            alt="Imagem da Página"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;