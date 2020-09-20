import React from "react";

const promtion = () => {
  const caseStudies = [
    {
      id: 1,
      subtitle: "Design",
      title: "  A custom creative for your  unique needs",
      img: "design",
    },
    {
      id: 2,
      subtitle: "Update",
      title: "Work on continuous updating and maintenance",

      img: "update",
    },
    {
      id: 3,
      subtitle: "Response",
      title: "Work on all devices effectively and efficiently",
      img: "responsive",
    },
  ];

  return (
    <section className="promtion">
      <div className='container-fluid'>
        <div className="row">
        {caseStudies.map((caseitem) => (
          <div className="case" key={caseitem.id}>
            <div className="case-details">
              <span>{caseitem.subtitle}</span>
              <h2>{caseitem.title}</h2>
            </div>
            <div className="case-image">
              <img
                src={require(`../assest/${caseitem.img}.jpg`)}
                alt={caseitem.title}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default promtion;
