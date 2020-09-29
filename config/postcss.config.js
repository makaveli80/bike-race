module.exports = {
  plugins: [
    require('tailwindcss')('./config/tailwind.config.js'),
    require('postcss-extend-rule'),
    require('postcss-nesting'),
    require('autoprefixer')
  ]
};
