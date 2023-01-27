# [Kevin Hinterlong Website](https://kevin.hinterlong.com)

Check it out

## Development

Prerequisites: `ruby` `gem` `bundler` then

```bash
$ bundle exec jekyll serve
```


## Katex Integration

### How to use it
I've added support for [KaTeX](https://github.com/KaTeX/KaTeX). All you have to do is include `katex: true` in the YAML Front Matter
```
---
katex: true
---
```

### How it works

1. The [custom header](/_includes/head/custom.html) loads the KaTeX javascript/css.

  ```html
  {% if page.katex %}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"></script>
  <script>
      document.addEventListener("DOMContentLoaded", function() {
          renderMathInElement(document.body, {
              // ...options...
          });
      });
  </script>
  {% endif %}
  ```
