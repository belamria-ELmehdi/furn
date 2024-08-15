/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box1: "0 0 1px 7px #ffffff63",
        box2: "0 0 10px -6px"
      },
      backgroundColor: {
        icon: "rgba(16, 16, 16, 0.05)"
      },

      fontFamily: {
        a: ["Work Sans", "Arial", "Helvetica", "sans-serif"],
        b: ["Urbanist", "Arial", "Helvetica", "sans-serif"],
        c: ["Urbanist", "Arial", "Helvetica", "sans-serif"]

      },
      colors: {
        colo1: "#f59a57"
      },

      backgroundImage: {
        // bran1: "url('/img/wd-furniture-brand-bg-hay-1.jpg')",
      },
      animation: {
        ani1: "ani1 3s infinite"
      },

      keyframes: {
        ani1: {
          '0%, 100%': {
            width: "10px",
            height: "10px"
          },
          '50%': {
            width: "25px",
            height: "25px"
          },
        }
      },

      gridTemplateColumns: {
        col1: "1fr 30%",
        col2: "1fr 60%",
        col3: "65% 35%",
        col4: "1fr 40%",
      },
      transformOrigin:{
      },

    // screens:{
    //   "s1024" : '1024px',
    //   "s786" : '786px',
    //   "s425" : '425px',
    //   "s375" : '375px',
    // },

 
  
    },
  },
  plugins: [
    
  ],
}