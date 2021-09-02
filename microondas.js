let prato;
let tempo;



function timer(padrao, entrada) {
    if (entrada < padrao) {
        console.log("tempo insuficiente")
    } else if (entrada >= padrao && entrada < 2 * padrao) {
        /*supondo que entre o tempo padrão e o dobro do tempo padrão o prato não sofra danos*/
        console.log("Prato pronto, bom apetite!!!")
    } else if (entrada >= 2 * padrao && entrada < 3 * padrao) {
        console.log("A comida queimou!")
    } else {
        console.log("kabumm")
    }
}



function microondas(prato, tempo) {

    switch (prato) {
        case "pipoca":
            timer(10, tempo)
            break;
        case "macarrao":
            timer(8, tempo)
            break;
        case "brigadeiro":
            timer(8, tempo)
            break;
        case "carne":
            timer(15, tempo)
            break;
        case "feijao":
            timer(12, tempo)
            break;
        default:
            console.log("Prato inexistente");
    }

}

microondas("pipoca", 11)
microondas("macarrao",10)
microondas("brigadeiro", 10)
microondas("carne", 15)
microondas("feijao", 12)
