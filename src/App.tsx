import './App.css';

export default function App() {
  return (
    <>
      <h1>Title avec h1</h1>
      <h2>Title avec h2</h2>
      <p>Tous les champs sont obligatoires</p>
      <span title="close">X</span>
      <img
        src="https://th.bing.com/th/id/OIP.o8ubNKazDVWgRKfCY1iB7gHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7"
        alt="react logo"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Alaa"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="Tu">Tunisie</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> J’accepte les conditions
          </label>
        </div>
        <button disabled>Envoyer</button>
      </form>
    </>
  );
}

