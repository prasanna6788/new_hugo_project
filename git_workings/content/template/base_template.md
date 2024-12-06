+++
date = '2024-11-13T16:35:59+05:30'
draft = true
title = 'Base template'
description="Create templates to render your content, resources, and data."
weight=4
categories=['template']
[sections]
sections = [
  { id = "base_template_lookup_order", name = "Base template lookup order" },
  { id = "define_the_base_template", name = "Define the base template" },
  { id = "override_the_base_template", name = "Override the base template" },
]
+++
<h1>iam template branch added for testing purpose</h1>
<h3 class="clr-sky">Template <span class="clr-sky" style="margin-left:20px;">Fundamentals</span></h3>
<h1 class="pg-heading" >Base templates</h1>
<hr>
<p class="pg-sub-hd">The base and block construct allows you to define the outer shell of your master templates (i.e., the chrome of the page).<p>
<p class="f-s15">The block keyword allows you to define the outer shell of your pages’ one or more master template(s) and then fill in or override portions as necessary.</p>
<div class="img-con">
    {{< youtube 0RKpf3rK57I >}}
</div>
<section id="base_template_lookup_order">
<h1 class="f-s25">Base template lookup order</h1>
<p class="f-s15">The base template lookup order closely follows that of the template it applies to (e.g. _default/list.html).</p>
<p class="f-s15">See Template Lookup Order for details and examples.</p>
</section>

<section id="define_the_base_template">
<h1 class="f-s25">Define the base template</h1>
<p class="f-s15">The following defines a simple base template at _default/baseof.html. As a default template, it is the shell from which all your pages will be rendered unless you specify another *baseof.html closer to the beginning of the lookup order.</p>
<p class="f-s15">layouts/_default/baseof.html</p>
<div class="container-code-sec">
<pre class="f-10">

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>{{ block "title" . }}
        <!-- Blocks may include default content. -->
        {{ .Site.Title }}
        {{ end }}</title>
    </head>
    <body>
    <!-- Code that all your templates share, like a header -->
    {{ block "main" . }}
    <!-- The part of the page that begins to differ between templates -->
    {{ end }}
    {{ block "footer" . }}
    <!-- More shared code, perhaps a footer but that can be 
    overridden if need be in  -->
    {{ end }}
    </body>
    </html>

    
</pre>
</div>
</section>
<section id="override_the_base_template">
<h1 class="f-s25">Override the base template </h1>
<p class="f-s15">The default list template will inherit all of the code defined above and can then implement its own "main" block from:
</p>
<p class="f-s15">layouts/_default/list.html</p>
<div class="container-code-sec">
<pre class="f-10">

    {{ define "main" }}
    <h1>Posts</h1>
    {{ range .Pages }}
        <article>
        <h2>{{ .Title }}</h2>
        {{ .Content }}
        </article>
    {{ end }}
    {{ end }}
</pre>
</div>
<p class="f-s15">This replaces the contents of our (basically empty) “main” block with something useful for the list template. In this case, we didn’t define a "title" block, so the contents from our base template remain unchanged in lists.</p>
<div class="container-sd-sec mr-tb">
<p class="f-s15">Code that you put outside the block definitions can break your layout. This even includes HTML comments. For example:</p>
<div class="container-code-sec">
<pre class="f-10">

    <!-- Seemingly harmless HTML comment..that will break your layout
     at build -->
    {{ define "main" }}
    ...your code here
    {{ end }}

</pre>
</div>
<p class="f-s15"> See this thread from the Hugo discussion forums.</p>
</div>
<p class="f-s15">The following shows how you can override both the "main" and "title" block areas from the base template with code unique to your default single template:</p>
<p class="f-s15">layouts/_default/single.html</p>
<div class="container-code-sec">
<pre class="f-10">

    {{ define "title" }}
    <!-- This will override the default value set in baseof.html; i.e., 
    "{{ .Site.Title }}" in the original example-->
    {{ .Title }} &ndash; {{ .Site.Title }}
    {{ end }}
    {{ define "main" }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
    {{ end }}
</pre>
</div>
</section>