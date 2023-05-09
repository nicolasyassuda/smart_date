import { useState } from "react";

interface propsModalAdicionar {
    name?: string,
    data: string,
    fecharModal: (fechar: boolean) => any,
    buscarAtividade: () => any
}
export default function Modal(props: propsModalAdicionar) {
    const { fecharModal, data, buscarAtividade } = props;
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [setor, setSetor] = useState("");
    async function criarAtividade() {

        const axios = require("axios")
        try {
            const res = await axios.post(process.env.URL_API+"/Rotinas/post",
                {
                    name: nome,
                    description: descricao,
                    role: setor,
                    day:parseInt(data.split("/")[0]),
                    month:parseInt(data.split("/")[1]),
                    year:parseInt(data.split("/")[2]),
                    feito: false
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
    return (
        <div style={{ display: "flex", position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0,0,0,0.5)", width: "100vw", height: "100vh" }}>

            <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2vw", position: "absolute", marginLeft: "35vw", marginTop: "30vh", width: "30vw", height: "30vh", backgroundColor: "white", borderRadius: "1vw" }}>
                <button style={{ position: "absolute", right: "1vw", top: "1vh" }} onClick={() => fecharModal(false)}>X</button>
                <div style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                    <label>Nome da Atividade:</label>
                    <input value={nome} style={{ width: "10vw", height: "12h", border: "1px solid black" }} onChange={(e)=>setNome(e.target.value)} type="text"></input>
                </div>
                <div style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                    <label>Descrição:</label>
                    <input value={descricao} style={{ width: "10vw", height: "12h", border: "1px solid black" }} onChange={(e)=>setDescricao(e.target.value)} type="text"></input>
                </div>
                <div style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                    <label>Setor:</label>
                    <input value={setor} style={{ width: "10vw", height: "12h", border: "1px solid black" }} onChange={(e)=>setSetor(e.target.value)} type="text"></input>
                </div>
                <button style={{ position: "absolute", bottom: "1vh",right:"1vw", color:"black" }} onClick={() => (criarAtividade(),setTimeout(fecharModal(false),0.5),buscarAtividade())}>Enviar</button>
            </div>
            
        </div>
    )
}