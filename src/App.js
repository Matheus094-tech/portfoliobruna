import logoSite from './img/logo.png'

function App() {
return (

<div className='fundo'>
  
<nav class="navbar navbar-expand-lg sticky-top" >
  <div class="container">
    <a class="navbar-brand" href="#home">
      <img src={logoSite} width="120px" height="80px" alt="logo"/> 
</a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-dark text-dark" aria-current="page" href="#home"><span className='titulos-navbar'>Ínicio</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark text-dark" aria-current="page" href="#video"><span className='titulos-navbar'>Sobre mim</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark text-dark" aria-current="page" href="#video"><span className='titulos-navbar'>Espetáculos</span></a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>

  <h1 className='titulo'>
    Bruna Ferraz
  </h1>
  <h2 className='subtitulo'>
    Professora de dança
  </h2>
<p className='frase'>
  Gerando experiências e criando conexões.
</p>

</div>






  
);
}


export default App;

