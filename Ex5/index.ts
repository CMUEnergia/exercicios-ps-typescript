class Usuario
{
    Email: string;
    Nome: string;
    Senha: string;

    constructor(email: string, nome: string)
    {
        this.Email = email;
        this.Nome = nome;
        this.Senha = (Math.random() + 1).toString(36).substring(12);
    }
}

const IdentificaDuplicados = (array: Usuario[]): Usuario[] => {
    // Coloque seu código aqui
    return [];
}


// Exemplos para teste. Sinta-se à vontade para completar com outros testes!
// Obs: Como a função retorna uma lista de objetos, a resposta abaixo apenas representa o(s) objeto(s) retornados!

console.log(IdentificaDuplicados([
    new Usuario('jc@cmu.com.br', 'João Carlos'),
    new Usuario('ana@cmu.com.br', 'Ana Maria'),
    new Usuario('pedro@cmu.com.br', 'Pedro Almeida'),
    new Usuario('joaozin@cmu.com.br', 'João Marcelo')])); // []

console.log(IdentificaDuplicados([
    new Usuario('joaozin@cmu.com.br', 'João Carlos'),
    new Usuario('ana@cmu.com.br', 'Ana Maria'),
    new Usuario('pedro@cmu.com.br', 'Pedro Almeida'),
    new Usuario('joaozin@cmu.com.br', 'João Marcelo')])); // [Usuario{'João Carlos'}, Usuario{'João Marcelo'}]

console.log(IdentificaDuplicados([])); // []
