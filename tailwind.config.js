module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [  
],
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  // purge: {
  //   content: ["./src/views/**/*.js", "./src/components/**/*.js"],
  //   // These options are passed through directly to PurgeCSS
  // },
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   check: "url('/icons/check.svg')",
      //   landscape: "url('/images/landscape/2.jpg')",
      // }),
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  future: {
    purgeLayersByDefault: true,
  },
}
