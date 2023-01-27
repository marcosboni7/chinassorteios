
export default function conteudo() {
    return (
        <>
            <h1 className='text-white text-[30px] ml-[101px] '>GRANDES PRÊMIOS</h1>
            <div className='image bg-[#3d3d40]  rounded-xl mt-36 ml-[114px] w-[628px] h-32 py-8 '
                style={{ cursor: "pointer" }}>

                <a href='produto.js' className='imagem mt-[-33px] '
                    style={{ width: "40%", height: "127px", cursor: "pointer" }}></a>

                <h1 className='information text-white font-bold mt-[-126px] ml-[256px] text-[18px]'>0,10 centavos cada cota. Valendo um pix <br>
                </br> de 100 reais </h1>
                <p className='text-white mt-3 ml-[256px] text-[20px] '>14/01/2023 21:00</p>
                <p className='text-white text-[15px] ml-[255px] mt-[-0.1rem] '>valor: R$ 7,00</p>
            </div>
            <div className='informations'>
                <h1 className='text-white text-[30px] ml-[111px] m-10 '>Ganhadores</h1>
                <h1 className='text-white text-[15px] ml-[111px] mt-[-2.5rem] '>confira os ultimos ganhadores</h1>
            </div>
            <div className='bg-white w-[126px] h-[6px] mt-[-29px] ml-[114px]'>
            </div>
        </>
    )
}
