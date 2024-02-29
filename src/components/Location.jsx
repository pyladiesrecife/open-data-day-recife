export default function Location() {
  return (
    <div className="location container ">
      <h2 className="text-2xl font-semibold text-primary text-center py-2">
        Informações do Evento
      </h2>
      <div className="flex flex-col lg:flex-row h-auto border-opacity-50">
        <div className="grid m-2 flex-grow card glass">
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.490929362986!2d-34.89835838850406!3d-8.05130018039424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e603456e15%3A0xaf32e7837cc074bb!2sAv.%20Gov.%20Agamenon%20Magalh%C3%A3es%2C%201114%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2052010-075!5e0!3m2!1spt-BR!2sbr!4v1709224822169!5m2!1spt-BR!2sbr"
              width="400"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Local do Evento</h2>
            <p>
              {" "}
              <b>Auditório da Claro, Regional Recife</b>{" "}
              <div className="sm:hidden divider"></div>Av. Gov. Agamenon
              Magalhães, 1114, 2° andar - Santo Amaro, Recife - PE
            </p>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <section className="overflow-hidden">
          <div className="bg-primary grid h-1/2 flex-grow card m-2">
            <div className="card-body">
              <h6 className="card-title">Horário e Data do Evento</h6>
              <p className="sm:text-sm text-xl">
                02/03 (sábado) das 10h às 15h*
              </p>
              <i className="text-md">*GMT - 3 / Horário de Brasília</i>
            </div>
          </div>
          <div className="bg-accent grid flex-grow card m-2">
            <div className="card-body">
              <h6 className="card-title">Ação solidária</h6>
              <p className="sm:text-sm text-xl">
                Levar 1kg de alimento não parecíveis. As arrecadações serão
                destinadas para a ONG LibertaElas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
