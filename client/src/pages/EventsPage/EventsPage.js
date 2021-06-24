import React from 'react';
import Header from '../../components/Header/Header';
import Events from '../../components/Events/Events';
import Footer from '../../components/Footer/Footer';

const EventsPage = props => {
  return (
    <section>
      <Header/>
      <Events/>
      <Footer/>
    </section>
  );
}

export default EventsPage;
