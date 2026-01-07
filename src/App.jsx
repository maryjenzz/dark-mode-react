import { useEffect, useState } from 'react'
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import codeDark from "./assets/code-dark.png";
import codeLight from "./assets/code-light.png";
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const tooggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <button className='darkmode-btn' onClick={tooggleDarkMode}>
        {darkMode ? <i className='bx  bx-sun'></i> : <i className='bx  bx-moon' ></i>}
      </button>

      <img src={darkMode ? logo : logo2} alt="Logo IFSC" className='logo' />

      <div className="main-container">
        <div className="main-content">
          <h1>
            <span className="react-text">React</span> + Javascript <br />
            <span className="highlight">Aprenda sem Limites!</span>
          </h1>
          <p>
            Venha aprender React com projetos práticos e desafios incríveis. <br />
            Domine o desenvolvimento web moderno e crie aplicações incríveis com <span className="react-text">React</span>!
          </p>
          <span className="prof">Professor Eduardo Gomes</span>
          <div className="buttons">
            <button className='primary' onClick={() => window.open('https://moodle.ifsc.edu.br/', '_blank')}>Acessar o Moodle</button>
            <button className='secondary' onClick={() => window.open('https://sigaa.ifsc.edu.br/sigaa/verTelaLogin.do', '_blank')}>Acessar o SIGAA</button>
          </div>
          <div className="reviews">
            <img className='avatar' src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
            <img className='avatar' src="https://randomuser.me/api/portraits/men/34.jpg" alt="user" />
            <span className="plus">+700</span>
            <span className="star">
              {[...Array(5)].map((_, i) => (
                <i className='bx bxs-star' key={i}></i>
              ))}
              5/5
            </span>
            <span>Mais de <strong>700</strong> desenvolvedores inscritos na primeira edição</span>
          </div>
        </div>
        <div className="code-example">
          <div className="code-header">
            {darkMode ? 'dark-mode.jsx' : 'light-mode.jsx'}
          </div>
          <img src={darkMode ? codeDark : codeLight} alt="React Code" />
          <div className="code-tags">
            <span className="tag react">React</span>
            <span className="tag javascript">Javascript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App // aula 68
