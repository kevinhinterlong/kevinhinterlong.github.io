---
title: "LaTeX in Jekyll"
excerpt: "Using KaTeX to render LaTeX in the browser."
header:
  teaser: /assets/images/math_equations_preview.jpg
  og_image: /assets/images/math_equations_preview.jpg
toc: true
tags:
  - math
katex: true
---

{% include base_path %}

## How I added support for Katex

The head loads the [KaTeX](https://github.com/Khan/KaTeX) javascript/css.


[`/_includes/head/custom.html:`](https://github.com/kevinhinterlong/kevinhinterlong.github.io/tree/master/_includes/head/custom.html)
```html
{% raw %}{% if page.katex %}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.js" integrity="sha384-OMvkZ24ANLwviZR2lVq8ujbE/bUO8IR1FdBrKLQBI14Gq5Xp/lksIccGkmKL8m+h" crossorigin="anonymous"></script>
{% endif %}{% endraw %}
```

The footer calls [`/assets/js/katex_render.js`](https://github.com/kevinhinterlong/kevinhinterlong.github.io/tree/master/assets/js/katex_render.js) which renders the LaTeX.


[`/_includes/footer/custom.html:`](https://github.com/kevinhinterlong/kevinhinterlong.github.io/tree/master/_includes/footer/custom.html)
```html
{% raw %}{% if page.katex %}
<script src="{{ "/assets/js/katex_render.js" | relative_url }}"></script>
{% endif %}{% endraw %}
```

Now, thanks to $$\KaTeX$$ I can render pretty math in the browser

$$ f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi $$


---
Thanks to [Type Theme](https://github.com/rohanchandra/type-theme) for the inspiration/code.
