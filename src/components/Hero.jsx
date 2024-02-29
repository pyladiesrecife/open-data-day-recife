import Banner from "../assets/banner.png";
import ODD from "../assets/odd-logo.png";

export default function Hero() {
  return (
    <>
      <img
        src={Banner}
        alt="banner do Open Data Day 2024"
        className="object-cover"
      />
      <div className="hero">
        <div className="hero-overlay bg-auto bg-accent-content bg-opacity-80"></div>
        <div className="hero-content flex-col my-1 lg:flex-row text-white">
          <img
            src={ODD}
            className="max-w-sm rounded-lg shadow-2xl bg-white"
            alt="Logo do Open Data Day Recife"
          />
          <div className="container ">
            <h2 className="text-4xl font-bold ">O que é o Open Data Day</h2>
            <p className="py-6">
              É uma iniciativa internacional criada e apoiada da Open Knowledge
              Foundation para divulgar projetos, iniciativas e ferramentas que
              lidam com dados abertos. É realizada durante a primeira semana de
              março em diversas cidades do mundo. No Brasil, os eventos do Open
              Data Day são realizados através das pessoas Embaixadoras da Open
              Knowledge Brasil em parceria com comunidades de tecnologia locais.
              No caso de Recife, o Women in Data Science (WiDS) e as PyLadies
              Recife ajudaram a organizar as últimas edições do evento.
            </p>
            <button className="btn btn-primary">
              <a
                href="https://opendataday.org/pt_br/"
                target="_blank"
                rel="noopener noreferrer">
                Saiba mais
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
