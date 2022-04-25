import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
      head: {
        title: 'Eason Chen',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'title', content: `Eason Chen` },
          // { name: 'description', content: `TBD` },
          { name: 'og:title', content: `Eason Chen` },
          { name: 'og:image', content: `https://eason.best/og_image.jpeg` },
          { name: 'og:url', content: `https://eason.best` },
          // { name: 'twitter:card', content: `` },
          { name: 'twitter:title', content: `Eason Chen` },
          // { name: 'twitter:description', content: `` },
          { name: 'twitter:image', content: `https://eason.best/og_image.jpeg` },
          { name: 'twitter:creator', content: `@Eason_C13` },
        ],
        script: [
          {
            src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
            integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
            crossorigin:"anonymous"
          },
          {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js",
            integrity: "sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF",
            crossorigin:"anonymous",
          }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' ,
            note: 'Icon from https://templateflip.com/templates/creative-cv/'},
          {
            href: "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",
            rel: "stylesheet",
          },
          {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css",
            integrity: "sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn",
            crossorigin: "anonymous",
          },
          // {
          //   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          //   rel: "stylesheet",
          //   integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          //   crossorigin: "anonymous"
          // }
        ]
      },
    }
    
})
