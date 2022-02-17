import React from "react";

const NosotrosPage = (props) => {
  return (
    <section className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          accusantium, eos excepturi magni perspiciatis nobis quo voluptatum,
          mollitia est sint earum. Ipsum, assumenda inventore! Quia in nobis
          nisi ratione similique?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsam error iure culpa quasi ex eos eligendi architecto ea nostrum
          quibusdam porro quod animi fugiat, tenetur obcaecati doloremque
          reprehenderit provident!
        </p>
      </div>
      <h2>Staff</h2>
        <div className="personas">
            <div className="persona">
                <img src="img/nosotros/nosotros1.jpg" width={75} alt="Juan"/>
                <h5>Juan Gomez</h5>
                <h6>Gerente General</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti ullam maiores velit neque tempora, suscipit itaque libero harum quas cumque assumenda tempore. Fuga libero architecto error. Provident, atque optio?</p>
            </div>

            <div className="persona">
                <img src="img/nosotros/nosotros2.jpg" width={75} alt="Juan"/>
                <h5>Celina Cruz</h5>
                <h6>Gerente Comercial</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti ullam maiores velit neque tempora, suscipit itaque libero harum quas cumque assumenda tempore. Fuga libero architecto error. Provident, atque optio?</p>
            </div>
          
            <div className="persona">
                <img src="img/nosotros/nosotros3.jpg" width={75} alt="Juan"/>
                <h5>Roberto Galan</h5>
                <h6>Gerente Comercial</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti ullam maiores velit neque tempora, suscipit itaque libero harum quas cumque assumenda tempore. Fuga libero architecto error. Provident, atque optio?</p>
            </div>

            <div className="persona">
                <img src="img/nosotros/nosotros4.jpg" width={75} alt="Juan"/>
                <h5>Gisela Paolantonio</h5>
                <h6>Gerente de Marketing</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti ullam maiores velit neque tempora, suscipit itaque libero harum quas cumque assumenda tempore. Fuga libero architecto error. Provident, atque optio?</p>
            </div>

            <div className="persona">
                <img src="img/nosotros/nosotros5.jpg" width={75} alt="Juan"/>
                <h5>Arturo Puig</h5>
                <h6>Gerente de Logistica</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti ullam maiores velit neque tempora, suscipit itaque libero harum quas cumque assumenda tempore. Fuga libero architecto error. Provident, atque optio?</p>
            </div>
          </div>
    </section>
  );
};

export default NosotrosPage;
