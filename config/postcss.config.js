module.exports = {
  plugins: [
    require('tailwindcss')('./config/tailwind.config.js'),
    require('postcss-nesting'),
    require('autoprefixer')
  ]
};
