// create table sumario(
//     id int auto_increment primary key,
//     id_disciplina integer,
//     titulo varchar(255),
//     nr_aula integer,
//     validate boolean,
//     data Date,
//     descricao varchar(255),
//     foreign key(id_disciplina) references Disciplina(id)
// );
import Sumario from './Sumario'

const Sumarios = ({sumarios,onOpen}) => {
    return (
        <>
            {sumarios.map((sumario) =>(
                 <Sumario key={sumario.id} 
                 sumario={sumario}
                 onOpen = {onOpen}
                 />
            ))}
        </>
    )
}

export default Sumarios;