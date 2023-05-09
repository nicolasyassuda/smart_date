export default async function obterRotinas(req, res) {
  console.log("AAAAAAAAAAAAAAAA")
  const RotinasDoMes = await fetch(
    process.env.URL_API+"/Rotinas/get/" + req.body.ano + "/" + req.body.mes,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  switch (RotinasDoMes.status) {
    case 200:
      const retorno = await RotinasDoMes.json();
      res.status(200).json(retorno);
      break;
    case 400:
      res.status(400).json("Parâmetros incorretos");
      break;
    default:
      res.status(500).json("Erro");
      break;
  }
}
