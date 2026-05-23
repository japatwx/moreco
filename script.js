function gerarDeclaracao(){

    let nome = document.getElementById("nome").value;

    let texto = document.getElementById("texto").value;

    if(nome === "" || texto === ""){

        alert("Preencha todos os campos!");

        return;
    }

    const data = new Date();

    const dataFormatada =
        data.getDate() + "/" +
        (data.getMonth() + 1) + "/" +
        data.getFullYear();

    document.getElementById("resultado").style.display = "block";

    document.getElementById("resultado").innerHTML = `

        <h2>DECLARAÇÃO</h2>

        <p>
            Eu, <strong>${nome}</strong>, declaro para os devidos fins que:
        </p>

        <br>

        <p style="line-height:30px; text-align:justify;">
            ${texto}
        </p>

        <br><br>

        <p>
            Data: ${dataFormatada}
        </p>

        <div class="assinatura">

            <hr>

            <p>${nome}</p>

        </div>

    `;

    document
    .getElementById("resultado")
    .scrollIntoView({
        behavior:"smooth"
    });

}
