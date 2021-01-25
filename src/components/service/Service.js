import React from 'react'
import './servicestyle.css'

const serviceOffer = [
  { id: 1, icon: "icon", title: "UI/UX Design", details: "Hellllooo" },
  {
    id: 2,
    icon: "icon",
    title: "DIGITAL MARTKETING",
    details: "normal testing",
  },
  { id: 3, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 4, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 5, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 6, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 7, icon: "icon", title: "WEBSITE Design", details: "website" },
];


function Service() {
    return (
      <>
        <main className="container">
          <aside className="row">
            <section className="col-sm-12 col-md-6 col-xl-6">
              <div>
                <h2>Designing With Passion While Exploring The World.</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing eveniet,
                  adipisci unde qui odit dolore, modi velit inventore soluta.
                  Saepe, beatae.
                </p>
              </div>
            </section>
            <div className="col-sm-12 col-md-6 col-xl-6">
              {" "}
              <section>
                <h2>Any Type Of Query & Discussion.</h2>
                <h3>Late talk with me</h3>
                <span>
                  {/* hire@ezekielmatomi588@gmail.com <MdArrowForward /> */}
                </span>
              </section>
            </div>
          </aside>
        </main>
        <div className="container-fluid">
          <article className="row">
            <section className="col-sm-12 col-md-6 col-xl-6 mx-auto text-center">
              <h2>Some of my projects.</h2>
              <div className="d-flex justify-content-center gap-5 service-product">
                {serviceOffer.map(({title,icon,details,id}) => {
                  return (
                    <div className="service-item" key={id}>
                      <h3>{title}</h3>
                      <div>{icon}</div>
                      <p>{details}</p> 
                    </div>
                  );
                })}
              </div>
            </section>
          </article>
        </div>
      </>
    );
}

export default Service
