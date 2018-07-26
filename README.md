# [Kevin Hinterlong Website](https://kevin.hinterlong.com)

Check it out

## Development

Prerequisites: `ruby` `gem` `bundler` then

```bash
$ bundle exec jekyll serve
```


## Katex Integration

### How to use it
I've added support for [KaTeX](https://github.com/Khan/KaTeX). All you have to do is include `katex: true` in the YAML Front Matter
```
---
katex: true
---
```

### How it works

1. The [custom header](/_includes/head/custom.html) loads the KaTeX javascript/css.

  ```html
  {% if page.katex %}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.js" integrity="sha384-OMvkZ24ANLwviZR2lVq8ujbE/bUO8IR1FdBrKLQBI14Gq5Xp/lksIccGkmKL8m+h" crossorigin="anonymous"></script>
  {% endif %}
  ```

2. then the [custom footer](/_includes/footer/custom.html) calls [`/assets/js/katex_render.js`](/assets/js/katex_render.js) which renders the LaTeX elements.

  ```html
  {% if page.katex %}
  <script src="{{ "/assets/js/katex_render.js" | relative_url }}"></script>
  {% endif %}
  ```