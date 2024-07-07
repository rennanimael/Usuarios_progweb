import React, { useState } from 'react';

interface Usuario {
  nome: string;
  idade: number;
  email: string;
  hobbies: string[];
}
const PerfilUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: 'John Doe',
    idade: 30,
    email: 'johndoe@example.com',
    hobbies: ['Leitura', 'Jogos', 'Cozinhar']
  });

  return (
    <div>
      <h1>{usuario.nome}</h1>
      <p>Idade: {usuario.idade}</p>
      <p>Email: {usuario.email}</p>
      <ul>
        {usuario.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilUsuario;