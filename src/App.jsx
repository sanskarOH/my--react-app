// import Header from './component/Header.jsx'
// import Footer from './component/Footer.jsx'
// import Food from './component/Food.jsx'
// import Card from  './component/Card.jsx'
import Student from './component/Student.jsx'
function App() {
  return(
    <>
      {/* <Header />
      <Food />
       <Card />
      <Footer /> */}
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Sanskar Diwedi" age={20} isStudent={true} />
      <Student name="Kaveri" age={20} isStudent={true} />
      <Student name="Vainavi" age={20} isStudent={true} />
    </>
    

  );

}

export default App
