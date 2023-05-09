import { useEffect, useState } from "react"
import moment from "moment"
import Modal from "../ModalAdicionar"
interface PropsDias {
    data: string,
    rotinas: any[],
    feriados: any[],
    obterDados: (valor: boolean) => any
}

export default function Dias(props: PropsDias) {
    const [exibirModal, setExibirModal] = useState(false);
    const [buscar, setBuscar] = useState(false);
    const { rotinas, data, feriados, obterDados } = props;
    let cor;
    useEffect(() => {
        fecharModal(false)
    }, [rotinas])
    useEffect(()=>{
        obterDados(buscar)
    },[buscar])
    feriados.map(feriado => {
        cor = data == moment(feriado.date).format("DD/MM/YYYY") ? ("#FF6600") : ("#FFFFFF")
    })
    async function deletarAtividade(id: number) {
        const axios = require("axios")
        try {
            const res = await axios.post("http://localhost:8000"+"/Rotinas/delete",
                {
                    id: id
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },

                })
                if(res.status==200){
                    setBuscar(!buscar)
                }
        } catch (err) {
            console.error(err)
        }
    }
    async function postarAtividadeFeita(id: number, check: boolean) {
        const axios = require("axios")
        try {
            const res = await axios.post("http://localhost:8000"+"/Rotinas/update",
                {
                    id: id,
                    feito: check
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },

                })
        } catch (err) {
            console.error(err)
        }
    }
    function renderizarAtividades() {

        const dia: number = parseInt(data.split("/")[0]);
        return rotinas.map((rotina: any) => {
            if (rotina.day == dia) {
                return (
                    <>
                        <div style={{ display: "flex", width: "80%", minHeight: "3vh", justifyContent: "space-around", backgroundColor: "cyan", borderRadius: "0.5vw", border: "1px solid black", marginBottom: "1vh", alignItems: "center" }}>
                            <button style={{ marginLeft: "0.5vw", width: "0.5vw", height: "0.5vw", borderRadius: "1vw", backgroundColor: "red" }} onClick={() => deletarAtividade(rotina.id)}><p style={{ textAlign: "center", fontSize: "6px", color: "white" }}>X</p></button>
                            {rotina.name}
                            <input type={"checkbox"} defaultChecked={rotina.feito} onClick={(e) => postarAtividadeFeita(rotina.id, e.currentTarget.checked)} ></input>
                        </div>

                    </>
                )
            }
        }
        )
    }
    function buscarAtividade(){
        setBuscar(!buscar)
    }
    function fecharModal(fechar: boolean) {
        setExibirModal(fechar)
    }

    function renderizarModal() {
        return (
            <Modal data={data} fecharModal={fecharModal} buscarAtividade={buscarAtividade} />
        )
    }

    return (
        <div className="flex flex-col border-2 items-center shadow-2xl" style={{ marginLeft: "1.5vw", marginBottom: "3vh", width: "12vw", minHeight: "15vh", maxHeight: "15vh", overflowY: "scroll", backgroundColor: cor }}>

            <div style={{ width: "100%", textAlign: "center", justifyContent: "space-between" }}>
                {data != "0" && (<>
                    {data}
                    <button style={{ marginLeft: "1vw", width: "1vw", height: "1vw", borderRadius: "1vw", backgroundColor: "greenyellow" }} onClick={() => setExibirModal(true)}><p style={{ marginBottom: "100px" }}>+</p></button>
                </>)}
            </div>

            {renderizarAtividades()}
            {exibirModal && renderizarModal()}
        </div>
    )
}