import React, { useState, ChangeEvent, FormEvent, useEffect }
import usuariosData from './usuarios.json';
interface Usuario {
nome: string;
idade: number;
email: string;
hobbies: string[];
}
const ListaUsuarios: React.FC = () => {
const [usuarios, setUsuarios] = useState<Usuario[]>([]);
useEffect(() => {
setUsuarios(usuariosData.usuarios);
}, []);
const handleAddNovoUsuario = (usuario: Usuario) => {
    setUsuarios(prev => [...prev, usuario])
}
return (
<div>
<h1>Lista de Usuários</h1>
<ul>
{usuarios.map((usuario,index) => (
<li key={index}>
<h2>{usuario.nome}</h2>
<p>Idade: {usuario.idade}</p>
<p>Email: {usuario.email}</p>
<ul>
{usuario.hobbies.map((hobby, index) => (
<li key={index}>{hobby}</li>
))}
</ul>
</li>
))}
</ul>
<FormularioUsuario handleAddNovoUsuario={handleAddNovoUsuario}/>
</div>
);
};
interface FormularioUsuarioProps{
handleAddNovoUsuario: (usuario: Usuario) => void
}
const FormularioUsuario: React.FC<FormularioUsuarioProps> =
const [usuario, setUsuario] = useState<Usuario>({
nome: '',
idade: 0,
email: '',
hobbies: []
});
const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
const { name, value } = e.target;
setUsuario(prevUsuario => ({
    ...prevUsuario,
[name]: name === 'idade' ? parseInt(value) : value
}));
};
const handleHobbyChange = (index: number, e: ChangeEvent<HTM
const novosHobbies = [...usuario.hobbies];
novosHobbies[index] = e.target.value;
setUsuario(prevUsuario => ({
...prevUsuario,
hobbies: novosHobbies
}));
};

const adicionarHobby = () => {
setUsuario(prevUsuario => ({
...prevUsuario,
hobbies: [...prevUsuario.hobbies, '']
}));
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
handleAddNovoUsuario(usuario)
};

return (
<form onSubmit={handleSubmit}>
<div>
<label>Nome:</label>
<input type="text" name="nome" value={usuario.nome} o
</div>
<div>
<label>Idade:</label>
<input type="number" name="idade" value={usuario.idade}
</div>
<div>
<label>Email:</label>
<input type="email" name="email" value={usuario.email}
</div>
<div>
<label>Hobbies:</label>
{usuario.hobbies.map((hobby, index) => (
<input
key={index}
type="text"
value={hobby}
onChange={(e) => handleHobbyChange(index, e)}
/>
))}
<button type="button" onClick={adicionarHobby}>Adicionar</button>
</div>
<button type="submit">Enviar</button>
</form>
);
};
export default ListaUsuarios;