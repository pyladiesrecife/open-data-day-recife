import React from "react";

function Schedule() {
  return (
    <div className="container items-center m-2">
      {" "}
      <h2 className="text-xl font-semibold text-center">Programação</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Tema</th>
              <th>Palestrante(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10h - 10h10</td>
              <td>Abertura do evento</td>
              <td>PyLadies Recife e Embaixadoras Open Knowledge Brasil</td>
            </tr>
            <tr>
              <td>10h10 - 10h30</td>
              <td>Portal de Dados Abertos da UFPE</td>
              <td>César Calafrioli</td>
            </tr>
            <tr>
              <td>10h30 - 11h10</td>
              <td>
                {" "}
                A Utilização de Dados Abertos para Promover Acesso à Equidade
                Educacional e Diminuir a Evasão
              </td>
              <td>Giselle Woolley</td>
            </tr>{" "}
            <tr>
              <td>11h30 - 12h</td>
              <td>
                {" "}
                Vamos dar uma folga ao Titanic e usar os dados da educação
                brasileira ?
              </td>
              <td>Abílio Nogueira</td>
            </tr>{" "}
            <tr>
              <td>12h - 12h50</td>
              <td> Coffee Break + Networking</td>
              <td></td>
            </tr>{" "}
            <tr>
              <td>12h50 - 13h20</td>
              <td> Utilização de Inteligência Artificial em Pernambuco</td>
              <td>Representantes IP.rec</td>
            </tr>{" "}
            <tr>
              <td>13h20 - 13h50</td>
              <td>
                {" "}
                Data Science aplicada a Energias Renováveis com Open Data e
                Python
              </td>
              <td>Francisco Debierne</td>
            </tr>{" "}
            <tr>
              <td>13h50 - 14h50</td>
              <td>
                {" "}
                Mesa Redonda: Acesso à água, urbanização desenfreada e mudanças
                climáticas. Como os dados podem nos ajudar a viver em uma cidade
                melhor?
              </td>
              <td>Stefany Silva, Adalberto Correia, Valdir Moura</td>
            </tr>{" "}
            <tr>
              <td>13h50 - 14h50</td>
              <td> 14h50 - 15h</td>
              <td>PyLadies Recife e Embaixadoras Open Knowledge Brasil</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
