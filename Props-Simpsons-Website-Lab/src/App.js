import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'
// import {useState} from 'react'

function App() {
  // let [simpsons,useSimpsons] = useState({
  //   {name: "Homer Simpson",
  //    description: "Loves his family as much as donuts.",
  //    email: "homer@simpson.com" },
  //    {name: "Lisa Simpson",
  //    description: "Amaxing saxophone player",
  //    email: "lisa@harvard.edu" },
  // })
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard 
              name={"Homer Simpson"}
              description = {"Loves his family as much as donuts."}
              email = {"homer@simpson.com"}
              pic={homer} />
              <ProfileCard 
              name={"Lisa Simpson"}
              description = {"Amazing saxophone player."}
              email = {"lisa@harvard.edu"}
              pic={lisa} />
              <ProfileCard 
              name={"Maggie Simpson"}
              description = {"Maggie is known to have murdered at least one person."}
              email = {"maggie@simpson.com"}
              pic={maggie}/>
              <ProfileCard 
              name={"Marge Simpson"}
              description = {"Marge is a role model."}
              email = {"marge@simpson.com"}
              pic={marge}/>
              <ProfileCard 
              name={"Bart Simpson"}
              description = {"Bart is the eternal prankster."}
              email = {"bart@simpson.com"}
              pic={bart} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
