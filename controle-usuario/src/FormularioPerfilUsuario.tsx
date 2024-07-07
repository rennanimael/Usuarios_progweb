import React, { useState, ChangeEvent, FormEvent } from
    'react';
interface Usuario {
    nome: string;
    idade: number;
    email: string;
    hobbies: string[];
}
const FormularioPerfilUsuario: React.FC = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        nome: '',
        idade: 0,
        email: '',
        hobbies: []
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement
    >) => {
        const { name, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [name]: name === 'idade' ? parseInt(value) : value
        }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            ...data,
            hobbies: typeof data.hobbies === 'string' ? (data.hobbies as string).split(',') : prevUsuario.hobbies
        }));
};
return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Nome:</label>
            <input type="text" name="nome" value={usuario.nome} onChange={handleChange} />
        </div>
        <div>
            <label>Idade:</label>
            <input type="number" name="idade" value={usuario.idade} onChange={handleChange} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={usuario.
                email} onChange={handleChange} />
        </div>
        <div>
            <label>Hobbies (separados por vírgula):</label>
            <input type="text" name="hobbies" value={usuario.hobbies.join(',')} onChange={(e) => {
                const { value } = e.target;
                setUsuario(prevUsuario => ({
                    ...prevUsuario,
                    hobbies: value.split(',').map(hobby => hobby.trim())
                }));
            }} />
        </div>
        <button type="submit">Enviar</button>
    </form>
);
};

export default FormularioPerfilUsuario;