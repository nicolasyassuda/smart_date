interface HeaderProps{
    definirPagina: (numero:number) => any
}
export default function Header(props:HeaderProps){
    const {definirPagina} = props;
    return(
        <div className="grid items-center grid-cols-3 bg-cyan-400 h-20">
            <div className="h-full cursor-pointer" style={{borderRight:"2px solid black"}} onClick={()=>definirPagina(1)}>
                <p className="text-4xl mt-4 text-center">Inicio</p>
            </div>
            <div className="h-full cursor-pointer"> 
                <p className="text-4xl mt-4 text-center" onClick={()=>definirPagina(2)}>Rotinas</p>
            </div>
            <div className="h-full cursor-pointer" style={{borderLeft:"2px solid black"}}>
                <p className="text-4xl mt-4 text-center" onClick={()=>definirPagina(3)}>Como usar</p>
            </div>
        </div>
    )
}