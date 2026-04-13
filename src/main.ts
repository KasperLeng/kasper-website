import './css/style.css';
import {
  iconVolvo,
  iconScroll,
  iconShip,
  iconTower,
  iconTrophy,
  iconNetgear,
  iconMicrosoft,
} from './pixel-svgs';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <nav class="pixel-nav" aria-label="Page sections">
      <a class="pixel-nav__link" href="#inventory">Inventory</a>
      <a class="pixel-nav__link" href="#quest-log">Quest log</a>
    </nav>
    <main class="pixel-shell">
      <header class="hero">
        <div class="hero-intro">
          <figure class="hero-portrait-frame">
            <div class="hero-portrait-inner">
              <img
                class="hero-portrait"
                src="/portrait.png"
                alt="Kasper Leng"
                width="960"
                height="1280"
                loading="eager"
                decoding="async"
              />
            </div>
          </figure>
          <div class="hero-copy">
            <p class="hero-label" aria-hidden="true">PLAYER SELECT</p>
            <div class="pixel-title-block">
              <h1 class="pixel-sign">Kasper Leng</h1>
            </div>
            <p class="hero-tagline">
              CLASS: CS @ UBC · STATUS: CO-OP READY
            </p>
            <div class="links">
              <a class="pixel-btn" href="https://github.com/KasperLeng" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a class="pixel-btn" href="https://www.linkedin.com/in/kasper-leng/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
          </div>
        </div>
      </header>

      <section class="section" id="inventory" aria-labelledby="inventory-heading">
        <h2 class="pixel-heading" id="inventory-heading"><span class="pixel-heading__prompt">&gt;</span> INVENTORY</h2>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Volvo Sales Dashboard</h3>
              <p>Designed a working dashboard in Figma for the Microsoft Delivery team and Volvo China sales team.</p>
              <a href="https://www.figma.com/proto/dPWZ89dMNS9ZZBNGFXFDCm/Figma-basics?node-id=2392-2465">[ OPEN FIGMA ]</a>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconVolvo}</div>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Prompt Engineering Platform</h3>
              <p>Applied prompt engineering to summarize customer feedback and extract key insights for AI products.</p>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconScroll}</div>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Battleship Game</h3>
              <p>Built with Java; won best UI and game design award for combat ship algorithms.</p>
              <a href="https://github.com/KasperLeng/BattleShip">[ GITHUB REPO ]</a>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconShip}</div>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Tower Defense Game</h3>
              <p>Developed a strategy game in Java using OOP principles for distinct classes like towers and enemies.</p>
              <a href="https://github.com/KasperLeng/TowerDefence">[ GITHUB REPO ]</a>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconTower}</div>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Microsoft GPT Hackathon</h3>
              <p>Contributed to strategic planning for a car sales system designed to convert leads into opportunities.</p>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconTrophy}</div>
          </div>
        </div>
      </section>

      <section class="section" id="quest-log" aria-labelledby="quest-log-heading">
        <h2 class="pixel-heading" id="quest-log-heading"><span class="pixel-heading__prompt">&gt;</span> QUEST LOG</h2>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>RF Software Developer Co-op @ Netgear</h3>
              <ul>
                <li>Developed automated test equipment (ATE) workflows using Python to improve efficiency.</li>
                <li>Added automated MAC Throughput testing capability and created test report templates.</li>
                <li>Participated in debugging the automation suite and maintaining test routines.</li>
              </ul>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconNetgear}</div>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner card-inner--with-icon">
            <div class="card-inner__body">
              <h3>Software Engineering Intern @ Microsoft</h3>
              <ul>
                <li>Deployed web applications on Azure using C# and C++ with the ChatGPT API.</li>
                <li>Enhanced AI output control using English and Mandarin prompt engineering.</li>
                <li>Designed and deployed solutions using the Hi-GPT platform and Figma.</li>
              </ul>
            </div>
            <div class="card-inner__icon pixel-icon" aria-hidden="true">${iconMicrosoft}</div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <a class="pixel-btn pixel-btn--wide" href="/resume.pdf" download="Kasper-Leng-Resume-2026.pdf">[ OBTAIN RESUME ]</a>
      </footer>
    </main>
  `;
}
