# Recycling Rewards App

A web application that rewards users for dropping recyclable waste (plastic, paper, metal, glass), with rewards calculated based on the type and weight of waste.

## Features

- User login (browser-based, local only)
- Drop-off logging for plastic, paper, metal, glass
- Rewards calculated by waste type and weight
- History of all drop-offs and total earned rewards
- Runs fully in the browser, data saved in localStorage

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/Benjamin-Akpeh/recycle-rewards-app.git
   cd recycle-rewards-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run locally:**
   ```
   npm start
   ```
   App will open at [http://localhost:3000](http://localhost:3000)

4. **Deploy to GitHub Pages:**
   ```
   npm run deploy
   ```
   - Your app will be published at `https://Benjamin-Akpeh.github.io/recycle-rewards-app`

## Notes

- All user data is stored in your browser's localStorage.
- No backend is required.  
- You can later connect to an API if you want to make the system persistent or multi-user.

## License

MIT