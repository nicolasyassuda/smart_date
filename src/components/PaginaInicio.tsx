import image from "../../public/imgs/imageIndex";

interface PaginaInicioProps {

}
export default function PaginaInicio(props: PaginaInicioProps) {
    return (
        <div>
            <img src={image()}></img>
            <div className="flex flex-col items-center justify-center mt-8 w-full pl-10 pr-10" style={{marginBottom:"20vh"}}>
                <h1 className="text-4xl pl-4 pr-4 pb-2" style={{ borderBottom: "0.5vh solid black" }}>Sobre Nós</h1>
                <p className="text-3xl mt-4 text-justify">Lorem ipsum dolor sit amet. Et accusantium esse est aperiam delectus ab recusandae repudiandae qui ipsam pariatur et omnis reiciendis ut adipisci tenetur et similique enim. Et eaque cumque a delectus tempore est asperiores minima quo itaque eveniet.

                    Ut omnis voluptates sit fugiat possimus et sunt incidunt id velit neque est natus sunt sed eligendi ullam vel magni asperiores. Aut facilis odit et nostrum magni At reprehenderit aliquam hic alias accusamus qui illum vitae ut recusandae molestias vel nihil sequi. Vel fuga quia est ratione dolorem est omnis minima qui officia aspernatur ut voluptas nisi aut quam quam nam sunt nesciunt.

                    Non animi quas aut alias internos est quibusdam vitae? Ab nesciunt labore et facere architecto vel quibusdam repudiandae ea rerum nisi ut rerum harum.</p>
            </div>
        </div>
    )
}