import Banner from "../assets/banner.png";
import ODD from "../assets/odd-logo.png";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: "url(https://imgur.com/a/F5y83rd)" }}>
        {/* <div className="hero-overlay bg-opacity-30"></div> */}
        <div className="hero-content flex-col lg:flex-row text-gray-700">
          <img src={ODD} className="max-w-sm rounded-lg shadow-2xl bg-white" />
          <div>
            <h1 className="text-5xl font-bold ">Open Data Day</h1>
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
