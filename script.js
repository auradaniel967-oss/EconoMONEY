function calcular() {

    // Pega os valores digitados
    const capital =
        Number(document.getElementById("capital").value);

    const taxa =
        Number(document.getElementById("taxa").value) / 100;

    const meses =
        Number(document.getElementById("meses").value);


    // Verifica se os valores são válidos
    if (
        capital < 0 ||
        taxa < 0 ||
        meses <= 0
    ) {

        document.getElementById("resultado").innerText =
            "Digite valores válidos.";

        return;
    }


    // Calcula juros compostos
    const resultado =
        capital * Math.pow(
            1 + taxa,
            meses
        );


    // Formata o resultado como dinheiro brasileiro
    const dinheiro =
        resultado.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );


    // Mostra o resultado
    document.getElementById("resultado").innerText =
        "Resultado estimado: " + dinheiro;
}


/* =========================
   CHECKLIST
========================= */

const checkboxes =
    document.querySelectorAll(
        '.checklist input[type="checkbox"]'
    );


checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener(
        "change",
        function() {

            const linha =
                this.parentElement;


            if (this.checked) {

                linha.style.opacity = "0.55";

                linha.style.textDecoration =
                    "line-through";

            } else {

                linha.style.opacity = "1";

                linha.style.textDecoration =
                    "none";
            }

        }
    );

});


/* =========================
   ANIMAÇÃO DOS CARDS
========================= */

const cards =
    document.querySelectorAll(".card");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});