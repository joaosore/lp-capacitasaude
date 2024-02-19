'use client';

export default function Home() {
  return (
    <>
      <div className="bg-warning d-flex justify-content-center align-items-center vh-100">
        <section>
          <h1
            className="text-center text-dark align-middle "
            style={{ fontSize: 100 }}
          >
            Em breve
          </h1>

          <div className="d-flex justify-content-center">
            <img width="35%" src="assets/img/image.svg" alt="" />
          </div>
          <div className="d-flex justify-content-center text-center">
            <div className="grid p-2">
              <p>Dias</p>
              <b className="day"></b>
            </div>
            <div className="grid p-2">
              <p>Horas</p>
              <b className="hour"></b>
            </div>
            <div className="grid p-2">
              <p>Minutos</p>
              <b className="minutes"></b>
            </div>
            <div className="grid p-2">
              <p>Segundos</p>
              <b className="seconds"></b>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <code className="bg-white p-1">
              Este site está em desenvolvimento
            </code>
          </div>
          <div className="text-center mt-5">
            {/* Contact:{' '}
            <a
              className="text-dark underline m-0 "
              style={{ fontWeight: 'bold' }}
              href="#"
              target="_blank"
            >
              info@yourcompanyname.com
            </a> */}
            <p className="m-0">CAPACITÁ SAÚDE EM MOVIMENTO</p>
          </div>
        </section>
      </div>
    </>
  );
}
