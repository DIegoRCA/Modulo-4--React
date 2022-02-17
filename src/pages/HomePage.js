import React from 'react';


const HomePage = (props)=>{
    return (
        <main className="holder">
            <div className="homeinmg">
                <img src="img/home/img01.jpg"></img>
            </div>
            <div className="columnas">
                <div className="bienvenidos Left">
                    <h2>Bienvenidos</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam quas accusantium odit magnam dicta accusamus suscipit nesciunt? Saepe quasi quos deserunt eum aspernatur eveniet iure facere consequuntur, consequatur assumenda.</p>
                </div>
                <div className="testimonios Right" >
                <h2>Testimonio</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Perez</span>
                </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;