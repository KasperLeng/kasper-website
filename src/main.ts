import './css/style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <main class="pixel-shell">
      <header class="hero">
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
      </header>

      <section class="section">
        <h2 class="pixel-heading"><span class="pixel-heading__prompt">&gt;</span> QUEST LOG</h2>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Volvo Sales Dashboard</h3>
            <p>Designed a working dashboard in Figma for the Microsoft Delivery team and Volvo China sales team.</p>
            <a href="https://www.figma.com/proto/dPWZ89dMNS9ZZBNGFXFDCm/Figma-basics?node-id=2392-2465">[ OPEN FIGMA ]</a>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Prompt Engineering Platform</h3>
            <p>Applied prompt engineering to summarize customer feedback and extract key insights for AI products.</p>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Battleship Game</h3>
            <p>Built with Java; won best UI and game design award for combat ship algorithms.</p>
            <a href="https://github.com/KasperLeng/BattleShip">[ GITHUB REPO ]</a>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Tower Defense Game</h3>
            <p>Developed a strategy game in Java using OOP principles for distinct classes like towers and enemies.</p>
            <a href="https://github.com/KasperLeng/TowerDefence">[ GITHUB REPO ]</a>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Microsoft GPT Hackathon</h3>
            <p>Contributed to strategic planning for a car sales system designed to convert leads into opportunities.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="pixel-heading"><span class="pixel-heading__prompt">&gt;</span> XP / RUN HISTORY</h2>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>RF Software Developer Co-op @ Netgear</h3>
            <ul>
              <li>Developed automated test equipment (ATE) workflows using Python to improve efficiency.</li>
              <li>Added automated MAC Throughput testing capability and created test report templates.</li>
              <li>Participated in debugging the automation suite and maintaining test routines.</li>
            </ul>
          </div>
        </div>
        <div class="card pixel-frame">
          <div class="card-inner">
            <h3>Software Engineering Intern @ Microsoft</h3>
            <ul>
              <li>Deployed web applications on Azure using C# and C++ with the ChatGPT API.</li>
              <li>Enhanced AI output control using English and Mandarin prompt engineering.</li>
              <li>Designed and deployed solutions using the Hi-GPT platform and Figma.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="footer">
        <a class="pixel-btn pixel-btn--wide" href="Kasper Leng Resume 2026.pdf" download>[ OBTAIN RESUME ]</a>
      </footer>
    </main>
  `;
}
