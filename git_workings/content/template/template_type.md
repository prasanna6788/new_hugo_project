+++
date = '2024-11-13T16:35:59+05:30'
draft = true
title = 'Template types'
description="Create templates to render your content, resources, and data."
weight=2
categories=['template']
[sections]
sections = [
  { id = "template_type", name = "Template Type" },
  { id = "base", name = "Base" },
  { id = "structure", name = "Structure" },
  { id = "home", name = "Home" },
  { id = "single", name = "Single" },
  { id = "section", name = "Section" },
  { id = "taxonomy", name = "Taxonomy" },
  { id = "term", name = "Term" },
  { id = "partial", name = "Partials" },
  { id = "contentview", name = "Content View" },
  { id = "renderhook", name = "Render Hooks" },
  { id = "shortcode", name = "Shortcodes" }
]

+++

<section id="template type">
        <div><h3 class="clr-sky">Template 4554</h3>
<h1 class="pg-heading " >Template</h1>
<hr>
<p class="pg-sub-hd">Create templates of different types to render your content, resources,<br> and data.
</p>
<div class="img-con">
    <img src="/site-hierarchy.svg" class="img-con" > 
</div>
<br>
</div>
</section>
<section id="base">
<h1 class="f-s25">Base</h1>
<p class="f-s15">Base templates reduce duplicate code by wrapping other templates within a shell.
</p>
<p class="f-s15">
For example, the base template below calls the partial function to include partial templates for the head, 
header, and footer elements of each page, and it uses the block function to include home, single, section,
 taxonomy, and term templates within the main element of each page.
</p>
<pre class="f-s15">
layouts/_default/baseof.html
</pre >
<div class="container-code-sec">
<!DOCTYPE html>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;{{ or site.Language.LanguageCode }}&quot; 
dir=&quot;{{ or site.Language.Language.Direction `ltr` }}&quot;&gt;
&lt;head&gt;
{{ partial &quot;head.html&quot; . }}
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
    {{ partial &quot;header.html&quot; . }}
&lt;/header&gt;
&lt;main&gt;
    {{ block &quot;main&quot; . }}{{ end }}
&lt;/main&gt;
&lt;footer&gt;
    {{ partial &quot;footer.html&quot; . }}
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>
<p class="f-s15">
Learn more about base templates.
</p>
</section>
  
<section id="structure">
<h1 class="f-s25">Strucure</h1>
<p class="f-s15">Create templates in the layouts directory in the root of your project.</p>
<p class="f-s15">Although your site may not require each of these templates, the example below is typical for a site of medium complexity.</p>
<div class="container-code-sec">
<pre class="f-15">
    layouts/

    ├── _default/

    │   ├── _markup/

    │   │   ├── render-image.html   <-- render hook

    │   │   └── render-link.html    <-- render hook

    │   ├── baseof.html

    │   ├── home.html

    │   ├── section.html

    │   ├── single.html

    │   ├── taxonomy.html

    │   └── term.html

    ├── articles/

    │   └── card.html               <-- content view

    ├── partials/

    │   ├── footer.html

    │   └── header.html

    └── shortcodes/

        ├── audio.html
        
        └── video.html
</pre>
</div>
<p class="f-s15">
Hugo’s template lookup order determines the template path, allowing you to create unique templates for any page.
</p>
c
<p class="f-s15">The purpose of each template type is described below.</p>
</section>
  
<section id="home">
<h1 class="f-s25">Home</h1>
<p class="f-s15">A home template renders your site’s home page. For a single page site this is the only required template.</p>
<p class="f-s15">
For example, the home template below inherits the site’s shell from the base template, and renders the home page content with a list of pages.
</p>
<pre class="f-s15">
layouts/_default/home.html
</pre>
<div class="container-code-sec">
<pre><code>{{ define &quot;main&quot; }}
{{ .Content }}
{{ range site.RegularPages }}
    &lt;h2&gt;&lt;a href=&quot;{{ .RelPermalink }}&quot;&gt;{{ .LinkTitle }}&lt;/a&gt;&lt;/h2&gt;
{{ end }}
{{ end }}
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
The page collections quick reference guide describes methods and functions to <br>filter, sort, and group page collections.
</div>
<p class="f-s15">
Learn more about home templates.
</p>
</section>
  
<section id="single">
<h1 class="f-s25">single</h1>
<p class="f-s15">A single template renders a single page.</p>
<p class="f-s15">For example, the single template below inherits the site’s shell from the base template, and renders the title and content of each page.</p>
<pre class="f-s15">layouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>{{ define &quot;main&quot; }}
&lt;h1&gt;{{ .Title }}&lt;/h1&gt;
{{ .Content }}
{{ end }}
</code></pre>
</div>
<p class="f-s15">Learn more about single templates.</p>
</section>
  
<section id="section">
<h1 class="f-s25">Section</h1>
<p class="f-s15">A section template typically renders a list of pages within a section.</p>
<p class="f-s15">For example, the section template below inherits the site’s shell from the base template, and renders a list of pages in the current section.</p>
<p class="f-s15">layouts/_default/section.html</p>
<div class="container-code-sec">
<pre><code>{{ define &quot;main&quot; }}
&lt;h1&gt;{{ .Title }}&lt;/h1&gt;
{{ .Content }}
{{ range .Pages }}
    &lt;h2&gt;&lt;a href=&quot;{{ .RelPermalink }}&quot;&gt;{{ .LinkTitle }}&lt;/a&gt;&lt;/h2&gt;
{{ end }}
{{ end }}
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
<p>The page collections quick reference guide describes methods and functions to filter,
sort, and group page collections.</p>
</div>
<p class="f-s15">Learn more about section templates.</p>
</section>
  
<section id="taxanomy">
<h1 class="f-s25">Taxonomy</h1>
<p class="f-s15">A taxonomy template renders a list of terms in a taxonomy.</p>
<p class="f-s15">
For example, the taxonomy template below inherits the site’s shell from the base template, and renders a list of terms in the current taxonomy.
</p>
<pre class="f-s15">
layouts/_default/home.html
</pre>
<div class="container-code-sec">
<pre><code>{{ define &quot;main&quot; }}
{{ .Content }}
{{ range site.RegularPages }}
    &lt;h2&gt;&lt;a href=&quot;{{ .RelPermalink }}&quot;&gt;{{ .LinkTitle }}&lt;/a&gt;&lt;/h2&gt;
{{ end }}
{{ end }}
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
The page collections quick reference guide describes methods and functions to <br>filter, sort, and group page collections.
</div>
<p class="f-s15">
Learn more about home templates.
</p>
</section>
  
<section id="term">
<h1 class="f-s25">Term</h1>
<p class="f-s15">A taxonomy template renders a list of terms in a taxonomy.</p>
<p class="f-s15">For example, the taxonomy template below inherits the site’s shell from the base template, and renders a list of terms in the current taxonomy</p>
<p class="f-s15">layouts/_default/taxonomy.html</p>
<div class="container-code-sec">
<pre><code>{{ define &quot;main&quot; }}
&lt;h1&gt;{{ .Title }}&lt;/h1&gt;
{{ .Content }}
{{ range .Pages }}
    &lt;h2&gt;&lt;a href=&quot;{{ .RelPermalink }}&quot;&gt;{{ .LinkTitle }}&lt;/a&gt;&lt;/h2&gt;
{{ end }}
{{ end }}
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
The page collections quick reference guide describes methods and functions to filter,
 sort, and group page collections.
</div>
<p class="f-s15">Learn more about term templates.</p>
</section>
  
<section id="partial">
    <h1 class="f-s25">Partials</h1>
    <p class="f-s15">A partial template is typically used to render a component of your site, though you may also create partial templates that return values.</p>
    <div class="container-sd-sec mr-tb">
    Unlike other template types, you cannot create partial templates to target a particular page kind,
    content type, section, language, or output format. Partial templates do not follow Hugo’s template lookup order.
    </div>
    <p class="f-s15">For example, the partial template below renders copyright information.</p>
    <p class="f-s15">layouts/partials/footer.html</p>
    <div class="container-code-sec">
    <p>s
    <p>Copyright {{ now.Year }}. All rights reserved.</p></p>
    </div>
    <p class="f-s15">Learn more about partial templates.</p>
</section>
  
<section id="contentview">   
    <h1 class="f-s25">Contentview</h1>
    <p class="f-s15">A content view template is similar to a partial template, invoked by calling the Render method on a Page object. Unlike partial templates, content view templates:</p>
    <ul>
    <li><p class="f-s15">Automatically inherit the context of the current page</p></li>
    <li><p class="f-s15">Follow a lookup order allowing you to target a given content type or section</p></li>
    <ul>
    <p class="f-s15">For example, the home template below inherits the site’s shell from the base template, and renders a card component for each page within the “articles” section of your site.</p>
    <p class="f-s15">layouts/_default/home.html</p>
    <div class="container-code-sec">
    <pre><code>    {{ define &quot;main&quot; }}
        {{ .Content }}
        &lt;ul&gt;
            {{ range where site.RegularPages &quot;Section&quot; &quot;articles&quot; }}
            {{ .Render &quot;card&quot; }}
            {{ end }}
        &lt;/ul&gt;
        {{ end }}
    </code></pre>
    </div>
    <p class="f-s15">layouts/articles/card.html</p>
    <div class="container-code-sec">
    <pre><code>&lt;div class=&quot;card&quot;&gt;
    &lt;h2&gt;&lt;a href=&quot;{{ .RelPermalink }}&quot;&gt;{{ .LinkTitle }}&lt;/a&gt;&lt;/h2&gt;
    {{ .Summary }}
    &lt;/div&gt;
    </code></pre>
    </div>
    <p class="f-s15">Learn more about content view templates.</p>
</section>
  
<section id="renderhook">
    <h1 class="f-s25">RenderHooks</h1>
    <p class="f-s15">A render hook template overrides the conversion of Markdown to HTML.</p>
    <p class="f-s15">For example, the render hook template below adds a rel attribute to external links.</p>
    <p class="f-s15">layouts/_default/_markup/render-link.html</p>
    <div class="container-code-sec">
    <pre><code>{{- $u := urls.Parse .Destination -}}
    &lt;a href=&quot;{{ .Destination | safeURL }}&quot;
    {{- with .Title }} title=&quot;{{ . }}&quot;{{ end -}}
    {{- if $u.IsAbs }} rel=&quot;external&quot;{{ end -}}
    &gt;
    {{- with .Text | safeHTML }}{{ . }}{{ end -}}
    &lt;/a&gt;
    {{- /* chomp trailing newline */ -}}
    </code></pre>
    </div>
    <p class="f-s15">Learn more about render hook templates.</p>
</section>
  
<section id="shortcode">
    <h1 class="f-s25">Shortcode</h1>
    <p class="f-s15">A shortcode template is used to render a component of your site. Unlike partial templates, shortcode templates are called from content pages.</p>
    <p class="f-s15">For example, the shortcode template below renders an audio element from a global resource.</p>
    <p class="f-s15">layouts/shortcodes/audio.html</p>
    <div class="container-code-sec">
    <pre><code>{{ with resources.Get (.Get &quot;src&quot;) }}
    &lt;audio controls preload=&quot;auto&quot; src=&quot;{{ .RelPermalink }}&quot;&gt;&lt;/audio&gt;
    {{ end }}
    </code></pre>
    </div>
    <p class="f-s15">Call the shortcode from your content page:</p>
</section>
    
<section id="other">
    <h1 class="f-s25">Other</h1>
    <p class="f-s15">Use other specialized templates to create:</p>
    <ul class="ml-30">
        <li><a class="clr-sky">Sitemaps</a></li>
        <li><a class="clr-sky">RSS feed</a></li>
        <li><a class="clr-sky">404 error pages</a></li>
        <li><a class="clr-sky">robots.txt files</a></li>
    </ul>
</section>
