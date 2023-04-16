import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
    const  listHeader = ['Home', 'Courses', 'Mentor', 'Community']
    const  listFooter = ['123 Market St.', '(434) 546-4356', 'contact@edumena.org']
    const  listFooterTwo = ['Facebook','Twitter','Linkedin','Instagram']

  return (
    <div style={{display: "flex", flexDirection : "column" }}>
        <Header
        list={listHeader}
        />
        <Main/>
        <Footer
            listTwo={listFooter}
            list={listFooterTwo}
        />
    </div>
  );
}

export default App;
