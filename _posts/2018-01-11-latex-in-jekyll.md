---
title: "LaTeX in Jekyll"
excerpt: "Using KaTeX to render LaTeX in the browser."
last_modified_at: 2018-07-27T02:07:29Z
header:
  teaser: /assets/images/math_equations_preview.jpg
  og_image: /assets/images/math_equations_preview.jpg
toc: true
tags:
  - math
---

{% include base_path %}

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
	{% raw %}{% if page.katex %}
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb" crossorigin="anonymous">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.js" integrity="sha384-OMvkZ24ANLwviZR2lVq8ujbE/bUO8IR1FdBrKLQBI14Gq5Xp/lksIccGkmKL8m+h" crossorigin="anonymous"></script>
	{% endif %}{% endraw %}
	```
2. The [custom footer](/_includes/footer/custom.html) calls [`/assets/js/katex_render.js`](/assets/js/katex_render.js) which renders the LaTeX elements.
	```html
	{% raw %}{% if page.katex %}
	<script src="{{ "/assets/js/katex_render.js" | relative_url }}"></script>
	{% endif %}{% endraw %}
	```

Now, thanks to $$\KaTeX$$ I can render pretty math in the browser server side

$$ f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi $$ 


---
Thanks to [Type Theme](https://github.com/rohanchandra/type-theme) for the inspiration/code.
