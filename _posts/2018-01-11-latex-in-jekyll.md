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
katex: true
---

{% include base_path %}

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
	{% raw %}{% if page.katex %}
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
	{% endif %}{% endraw %}
	```

Now, with $$\KaTeX$$ I can render pretty math in the browser

$$ f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi $$ 


---
Thanks to [Type Theme](https://github.com/rohanchandra/type-theme) for the inspiration/code.
