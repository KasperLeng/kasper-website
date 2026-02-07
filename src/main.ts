import './css/style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <main>
      <header class="hero">
        <h1>Kasper Leng</h1>  
        <p>Computer Science Student @ UBC / RF Software Developer</p>  
        <div class="links">
          <a href="https://github.com/KasperLeng" target="_blank">GitHub</a>  
          <a href="https://www.linkedin.com/in/kasper-leng/" target="_blank">LinkedIn</a>  
          <button id="theme-toggle" class="theme-button">Toggle Theme</button>
        </div>
      </header>

      <section class="section">
        <h2>Projects</h2>
        <div class="card">
          <h3>Volvo Sales Dashboard</h3>
          <p>Designed a working dashboard in Figma for the Microsoft Delivery team and Volvo China sales team.</p>  
          <a href="https://www.figma.com/proto/dPWZ89dMNS9ZZBNGFXFDCm/Figma-basics?node-id=2392-2465">View Figma</a>
        </div>
        <div class="card">
          <h3>Prompt Engineering Platform</h3>
          <p>Applied prompt engineering to summarize customer feedback and extract key insights for AI products.</p> 
        </div>
        <div class="card">
          <h3>Battleship Game</h3>
          <p>Built with Java; won best UI and game design award for combat ship algorithms.</p>  
          <a href="https://github.com/KasperLeng/BattleShip">GitHub Repo</a>  
        </div>
        <div class="card">
          <h3>Tower Defense Game</h3>
          <p>Developed a strategy game in Java using OOP principles for distinct classes like towers and enemies.</p>  
          <a href="https://github.com/KasperLeng/TowerDefence">GitHub Repo</a>
        </div>
        <div class="card">
          <h3>Microsoft GPT Hackathon</h3>
          <p>Contributed to strategic planning for a car sales system designed to convert leads into opportunities.</p>
        </div>
      </section>

      <section class="section">
        <h2>Experience</h2>
        <div class="card">
          <h3>RF Software Developer Co-op @ Netgear</h3> 
          <ul>
            <li>Developed automated test equipment (ATE) workflows using Python to improve efficiency.</li>
            <li>Added automated MAC Throughput testing capability and created test report templates.</li>  
            <li>Participated in debugging the automation suite and maintaining test routines.</li> 
          </ul>
        </div>
        <div class="card">
          <h3>Software Engineering Intern @ Microsoft</h3>
          <ul>
            <li>Deployed web applications on Azure using C# and C++ with the ChatGPT API.</li> 
            <li>Enhanced AI output control using English and Mandarin prompt engineering.</li>  
            <li>Designed and deployed solutions using the Hi-GPT platform and Figma.</li> 
          </ul>
        </div>
      </section>

      <footer class="footer">
        <a href="Kasper Leng Resume 2026.pdf" download>Download My Resume</a> 
      </footer>
    </main>
  `;

  // Toggle dark mode on click
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}