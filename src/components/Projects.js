import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import "./Projects.css";

const IMAGES = [
  {
    path: "news-analyzer-app.png",
    title: "News Analyzer",
    desc: `This app was my capstone project for my Computer Science degree. 
    It is a machine learning app that attempts to determine the veracity of a news article. 
    The app presents the user with 6 different articles to read and run through the prediction model.
    There is also a dashboard of various plots to show ways in which the data was wrangled to train the model.`,
    dev: `The dataset for this project was sourced from kaggle.com and then cleaned and processed inside a jupyter notebook. 
    Once the data had been prepared I utilized a voting classifier model which combined a logistic regression model and a 
    random forest classifier model. The web interface backend utilized Python and the Flask framework and was hosted on Heroku.
    The frontend was handled with Flask templating, HTML5, CSS3. The dashboard was implemented using the Dash library.`,
    id: 3,
    tech: ["Flask", "Python", "Dash", "HTML5", "CSS3", "VSCode", "Heroku"],
    url: "https://youtu.be/34VcKqU2wms",
  },
  {
    path: "appt-app.png",
    title: "Consultant Portal",
    desc: `This app was for my Software 2 course. It is a consultant's portal for a consulting firm. It allows users
    who are registered in the database to sign-in and view their daily schedule. Users can also add new clients to 
    their roster and create appointments with those clients. Furhter, users can view reports of their appointment types on a monthly basis.`,
    dev: `The consultant portal was developed with Java and the GUI constructed with JavaFX and includes a database connection supported 
    by MySQL. All of the data is loaded into the application on a per consultant basis. The application also supports localization based 
    upon the login in location of the consultant. Appointment times are reflected in the local time and saved in UTC per the same. 
    A variety of input validation is implemented including disallowing overlapping schedule times between multiple consultant appointments.`,
    id: 0,
    tech: ["Java", "MySQL", "Netbeans"],
    url: "https://youtu.be/wXKDcukQzGQ",
  },
  {
    path: "inventory-app.png",
    title: "Inventory Management",
    desc: `This app was for my Software 1 course. It is a commercial inventory app for an parts manufacture. It allows the manufacture to 
    create and save a variety of parts and products to their shop inventory. The products are constructed of parts and both inventories are 
    searchable with plain text.`,
    dev: `The inventory management app was programmed in Java and the GUI constructed with JavaFX. The data is local and temporarily stored. 
    Input validation is included in all the forms based on data type.`,
    id: 2,
    tech: ["Java", "Netbeans"],
    url: "https://youtu.be/8p2Ug1-gKPk",
  },

  {
    path: "react-app.png",
    title: "Portfolio Website",
    desc: `Wait!..What? How did this get here? Well, after graduating I wanted to learn React.js
    and what better way to learn a new technology than by refurbishing an old project for the purpose. So
    here we are. It was a really fun process and I may have the previous site link around here somewhere...
    for comparisons-sake, of course. Perhaps the tutorial button...`,
    dev: `This project was developed using React, HTML5, CSS3, and JavaScript. The routing and transitions are
    implemented with React-Router. No other outside frameworks or libraries were used. Everything from the 
    layout and design, to the responsiveness was tuned specifically by yours truly.`,
    id: 4,
    tech: ["React", "Javascript", "HTML5", "CSS3", "VSCode"],
    url:
      "That's this site, silly! Click OK to redirect to the old site...https://rufusgerm.github.io/",
  },
  {
    path: "delivery-app.png",
    title: "Traveling Salesman",
    desc: `This project was created for my Data Structures & Algorithms 2 course. It is my take on the
    traveling salesman problem. The program is a basic console-based application which utilizes manual
    programmatic partitioning and the K-Nearest Neighbors algorithm to load a set of three trucks with
    packages and deliver those packages in the least number of miles possible. Within the console the
    user can advance the time in the day and see the status of any package in the itinerary at a particular
    time. Once complete the program outputs the final mileage accumulated by all of the trucks.`,
    dev: `The traveling salesman app was programmed with Python in the Pycharm IDE. It implements an event 
    loop system which increments forward by 1 minute, though the user may advance time in greater increments.
    Each truck object is allowed to add a package delivery event to the event loop and with each tick, the loop
    checks if there are any events to fire. This progresses until a statically set time at which point the program
    terminates.`,
    id: 1,
    tech: ["Python", "Pycharm"],
    url: "https://youtu.be/V0tcwRDLX6w",
  },
];

const Projects = (props) => {
  const [modalId, setModalId] = React.useState(null);

  const handleItemClicked = (e, itemId) => {
    e.preventDefault();
    setModalId(itemId);
  };

  const handleClose = () => {
    setModalId(null);
  };

  const createImageGallery = (img) => {
    let path = require(`../app_images/${img.path}`);
    const modal =
      modalId === img.id
        ? ReactDOM.createPortal(
            <Modal {...img} onClose={handleClose} />,
            document.getElementById("modal-root")
          )
        : null;
    return (
      <div key={img.id + img.title} className={`gallery-item`}>
        <img
          src={path}
          alt={img.title}
          onClick={(e) => {
            handleItemClicked(e, img.id);
          }}
        />
        {modal}
      </div>
    );
  };

  return (
    <div className={`${props.className} `}>
      <div className={`projects-gallery`}>
        {IMAGES.map((img) => createImageGallery(img))}
      </div>
    </div>
  );
};

export default Projects;
