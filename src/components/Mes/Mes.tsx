import Dias from "./Dias"

interface PropsSemanas {
    domingos: string[],
    segundas: string[],
    tercas: string[],
    quartas: string[],
    quintas: string[],
    sextas: string[],
    sabados: string[],
    rotinas: any[],
    feriados: any[],
    obterDados: (obter:boolean) => any
}

export default function Mes(props: PropsSemanas) {
    const { domingos, segundas, tercas, quartas, quintas, sextas, sabados, rotinas, feriados, obterDados } = props;
    console.log(rotinas)
    function renderizaDiaDaSemana(diaDaSemana: string[]) {
        return diaDaSemana.map(dia =>
            <Dias obterDados={obterDados} feriados={feriados} key={dia} data={dia} rotinas={rotinas}></Dias>
        )

    }
    return (
        <div className="grid grid-cols-7 ml-8 mr-8" style={{ width: "95.5vw" }}>
            <div>{renderizaDiaDaSemana(domingos)}</div>
            <div>{renderizaDiaDaSemana(segundas)}</div>
            <div>{renderizaDiaDaSemana(tercas)}</div>
            <div>{renderizaDiaDaSemana(quartas)}</div>
            <div>{renderizaDiaDaSemana(quintas)}</div>
            <div>{renderizaDiaDaSemana(sextas)}</div>
            <div>{renderizaDiaDaSemana(sabados)}</div>
        </div>
    )


}