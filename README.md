# [Kevin Hinterlong Website](https://kevin.hinterlong.com)

Check it out

---

I've added a custom header to load [KaTeX](https://github.com/Khan/KaTeX)


The head loads the KaTeX javascript/css
[`/_includes/head/custom.html:`](/_includes/head/custom.html)
```html
{% if page.katex %}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.js" integrity="sha384-OMvkZ24ANLwviZR2lVq8ujbE/bUO8IR1FdBrKLQBI14Gq5Xp/lksIccGkmKL8m+h" crossorigin="anonymous"></script>
{% endif %}
```

The footer calls [`/assets/js/katex_render.js`](/assets/js/katex_render.js) which renders the LaTeX.
[`/_includes/footer/custom.html:`](/_includes/footer/custom.html)
```html
{% if page.katex %}
<script src="{{ "/assets/js/katex_render.js" | relative_url }}"></script>
{% endif %}
```