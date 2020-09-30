module.exports = {
  plugins: [
    require('postcss-atrule-bem'),
    require('tailwindcss')('./config/tailwind.config.js'),
    require('postcss-extend-rule'),
    require('postcss-nesting'),
    require('autoprefixer')
  ]
};
