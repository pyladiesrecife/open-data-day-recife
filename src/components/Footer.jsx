import React from "react";
import LogoOK from "../assets/okbr.png";
import LogoClaro from "../assets/claro.png";
import LogoPyLadiesRec from "../assets/pyladies_recife_logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <h6 className="footer-title">Links importantes</h6>
          <a className="link link-hover">Código de Conduta</a>
          <a
            className="link link-hover"
            target="_blank"
            href="https://ok.org.br/">
            Sobre a Open Knowledge Brasil
          </a>
          <a
            className="link link-hover"
            target="_blank"
            href="linktr.ee/pyladiesrecife">
            PyLadies Recife
          </a>
          <a
            className="link link-hover"
            target="_blank"
            href="linktr.ee/libertaelas">
            LibertaElas
          </a>
          <a className="link link-hover">Claro Recife</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://twitter.com/pyladies_recife">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/pyladiesrecife"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 72 72"
                className="fill-current">
                <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" />
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#FFF"
                />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/pyladiesrecife">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
                viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9
                114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0
                189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5
                74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8
                26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8
                26.8zm76.1
                27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
                0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1
                147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37
                2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2
                34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8
                19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7
                2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
                9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9
                132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5
                9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
          <div className="">
            <h6 className="footer-title">apoio & organização</h6>
            <div className="grid grid-flow-col gap-4">
              <img
                className="w-[72px]"
                src={LogoOK}
                alt="Logo da Open Knowledge Brasil"
              />
              <img
                className="w-[80px] self-center"
                src={LogoClaro}
                alt="Logo da Open Knowledge Brasil"
              />
              <img
                className="w-[72px]"
                src={LogoPyLadiesRec}
                alt="Logo da Open Knowledge Brasil"
              />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}
