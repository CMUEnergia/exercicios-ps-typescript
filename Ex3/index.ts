
const MaisAntiga = (datas: string[]): string => {
    // Coloque seu código aqui
    return "";
}

// Exemplos para teste. Sinta-se à vontade para completar com outros testes!

console.log(MaisAntiga(['2023-02-01', '2023-02-02'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2020-12-31', '2023-01-01'])); // '2020-12-31'
console.log(MaisAntiga(['2023-02-01', '2023-02-01'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2024-02-12' , '2023-02-01'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2023/02/01', '2020-12-31'])); // '2020-12-31'
console.log(MaisAntiga(['2023-02-01', 'string-invalida'])); // '2023-02-01'
console.log(MaisAntiga([])); // ERRO

