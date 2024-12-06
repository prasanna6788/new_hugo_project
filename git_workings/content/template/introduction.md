+++
title = "Introduction"
date = "2024-11-13T16:35:59+05:30"
draft = true
weight = 1
description="Create templates to render your content, resources, and data."
categories=['template']
[sections]
sections = [
  { id = "context", name = "Context" },
  { id = "actions", name = "Actions" },
  { id = "variables", name = "Variables" },
  { id = "functions", name = "Functions" },
  { id = "methods", name = "Methods" },
  { id = "comments", name = "Comments" },
  { id = "include", name = "Include" },
  { id = "examples", name = "Examples" }
]
+++

<section id="introduction">
        <div><h3 class="clr-sky">Template <span class="clr-sky" style="margin-left:20px;">Fundamentals</span></h3>
<h1 class="pg-heading" >Introduction to Templating</h1>
<hr>
<p class="pg-sub-hd">Create templates to render your content, resources, and data.
<p>
<p class="f-s20">A template is a file in the layouts directory of a project, theme, or module. Templates 
use variables , functions, and methods to transform your content, resources, and data 
into a published page</p>
<div class="container-sd-sec">
   <p class="f-s15">Hugo uses Go’s text/template and html/template packagedes.<br>
       The text/template package implements data-driven templates for generating 
       textual output, while the html/template package implements data-driven <br>
       templates for generating HTML output safe against code injection.<br>
       By default, Hugo uses the html/template package when rendering HTML files.
   </p>
</div>
<p class="f-s20">
For example, this HTML template initializes the $v1 and $v2 variables, then displays them and their product within an HTML paragraph.
</p>
<div class="container-code-sec">
<pre><code>    {{ $v1 := 6 }}
    {{ $v2 := 7 }}
    &lt;p&gt;The product of {{ $v1 }} and {{ $v2 }} is {{ mul $v1 $v2 }}.&lt;/p&gt;
</code></pre>
</div>
<p class="f-s20">
While HTML templates are the most common, you can create templates for any output format including CSV, JSON, RSS, and plain text.
</p>
<!-- <div class="space-hr"></div> --></div>
</section>
  

<section id="context">
        <div><h1 class="f-s25">Context</h1>
<p class="f-s20">The most important concept to understand before creating a template is context, the data passed into each template. The data may be a simple value, or more commonly objects and associated methods.</p>
<br class="f-s20">
<p class="f-s20">For example, a template for a single page receives a Page object, and the Page object provides methods to return values or perform actions.</p>
<h1 class="fs25">Current Context</h1>
<p class="f-s20">Within a template, the dot (.) represents the current context.</p>
<pre class="f-s15">layouts/_default/single.html.</pre>
<div class="container-code-sec">
    &lt;h2&gt;{{ .Title }}&lt;/h2&gt;
</div>
<p class="f-s20">In the example above the dot represents the Page object, and we call its Title method to return the title as defined in front matter.</p>
<p class="f-s20">The current context may change within a template. For example, at the top of a template the context might be a Page object, but we rebind the context to another value or object within range or with blocks.</p>
<pre class="f-s15">llayouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>  &lt;h2&gt;{{ .Title }}&lt;/h2&gt;

  {{ range slice &quot;foo&quot; &quot;bar&quot; }}
    &lt;p&gt;{{ . }}&lt;/p&gt;
  {{ end }}

  {{ with &quot;baz&quot; }}
    &lt;p&gt;{{ . }}&lt;/p&gt;
  {{ end }}
</code></pre>
</div>
<p class="f-s20">The current context may change within a template. For example, at the top of a template the context might be a Page object, but we rebind the context to another value or object within range or with blocks.</p>
<div class="container-code-sec">
<pre><code>    &lt;h2&gt;My Page Title&lt;/h2&gt;
    &lt;p&gt;foo&lt;/p&gt;
    &lt;p&gt;bar&lt;/p&gt;
    &lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
<h1 class="fs25">Template Context</h1>
<p class="f-s20">Within a range or with block you can access the context passed into the template by prepending a dollar sign ($) to the dot:</p>
<pre class="f-s15">layouts/_default/single.html</pre>
<div class="container-code-sec">
&lt;h2&gt; {{ .Title }} &lt;/h2&gt;
<p>{{ range slice &ldquo;foo&rdquo; &ldquo;bar&rdquo; }}
&lt;p&gt;{{ . }}&lt;/p&gt;
{{ end }}</p>
<p>{{ with &ldquo;baz&rdquo; }}
&lt;p&gt;{{ . }}&lt;/p&gt;
{{ end }}</p>
<p></pre></p>
</div>
<p class="f-s20">Hugo renders this to:</p>
<div class="container-code-sec">
<pre><code>     &lt;p&gt;My Page Title - foo&lt;/p&gt;
</code></pre>
</div>
<div class="container-sd-sec  mr-tb">
   <p class="f-s15" > 
     Make sure that you thoroughly understand the concept of context before you continue 
     reading. The most common templating errors made by new users relate to context.
   </p>
</div></div>
</section>


<section id="comments">
        <div><h1 class="f-s25">Comments</h1>
<div class="container-sd-sec">
Do not attempt to use HTML comment delimiters to comment out template code.
<p>Hugo strips HTML comments when rendering a page, but first evaluates any template code within the HTML comment delimiters. Depending on the template code within the HTML comment delimiters, this could cause unexpected results or fail the build.</p>
</div>
<p class="f-s20">Template comments are similar to template actions. Paired opening and closing braces represent the beginning and end of a comment. For example:</p>
<div class="container-code-sec">
<pre><code>{{/* This is an inline comment. */}}
{{- /* This is an inline comment with adjacent whitespace removed. */ -}}
</code></pre>
</div>
<p class="f-s20">Code within a comment is not parsed, executed, or displayed. Comments may be inline, as shown above, or in block form:</p>
<div class="container-code-sec">
<p>{{/*
This is a block comment.
*/}}</p>
<p>{{- /*
This is a block comment with
adjacent whitespace removed.
*/ -}}</p>
</div>
<p class="f-s20">You may not nest one comment inside of another.</p>
<p class="f-s20">To render an HTML comment, pass a string through the safeHTML template function. For example:</p>
<div class="container-code-sec">
<pre><code>  {{ &quot;&lt;!-- I am an HTML comment. --&gt;&quot; | safeHTML }}
  {{ printf &quot;&lt;!-- This is the %s site. --&gt;&quot; .Site.Title | safeHTML }}
</code></pre>
</div></div>
 </section>
  

<section id="actions">
        <div><h1 class="f-s25">Action</h1>
<p class="f-s15">In the examples above the paired opening and closing braces represent the beginning and end of a template action, a data evaluation or control structure within a template.</p>
<p class="f-s15">A template action may contain literal values (boolean, string, integer, and float), variables, functions, and methods.</p>
<pre class="f-s15">layouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>    {{ $convertToLower := true }}
    {{ if $convertToLower }}
    &lt;h2&gt;{{ strings.ToLower .Title }}&lt;/h2&gt;
    {{ end }}
</code></pre>
</div>
<p class="f-s15">In the example above:</p>
<p class="f-s15">Hugo renders the above to:</p>
<div class="container-code-sec">
<pre><code>&lt;h2&gt;my page title&lt;/h2&gt;
</code></pre>
</div>
<h1 class="fs25">Whitespace </h1>
<p class="f-s15">Notice the blank lines and indentation in the previous example? Although irrelevant in production when you typically minify the output, you can remove the adjacent whitespace by using template action delimiters with hyphens</p>
<pre class="f-s15">llayouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>{{- $convertToLower := true -}}
{{- if $convertToLower -}}
  &lt;h2&gt;{{ strings.ToLower .Title }}&lt;/h2&gt;
{{- end -}}
</code></pre>
</div>
<p class="f-s15">Hugo renders this to:</p>
<div class="container-code-sec">
<pre><code>  &lt;h2&gt;my page title&lt;/h2&gt;
</code></pre>
</div>
<p class="f-s15">Whitespace includes spaces, horizontal tabs, carriage returns, and newlines.</p>
<h1 class="fs25">Pipes</h1>
<p class="f-s15">Within a template action you may pipe a value to function or method. The piped value becomes the final argument to the function or method. For example, these are equivalent:</p>
<div class="container-code-sec">
<pre><code>{{ strings.ToLower &quot;Hugo&quot; }} → hugo
{{ &quot;Hugo&quot; | strings.ToLower }} → hugo
</code></pre>
</div>
<p class="f-s15">You can pipe the result of one function or method into another. For example, these are equivalent:</p>
<div class="container-code-sec">
<pre><code>{{ strings.TrimSuffix &quot;o&quot; (strings.ToLower &quot;Hugo&quot;) }} → hug
{{ &quot;Hugo&quot; | strings.ToLower | strings.TrimSuffix &quot;o&quot; }} → hug
</code></pre>
</div>
<p class="f-s15">These are also equivalent:</p>
<div class="container-code-sec">
<pre><code>{{ mul 6 (add 2 5) }} → 42
{{ 5 | add 2 | mul 6 }} → 42
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
<p>Remember that the piped value becomes the final argument to the function or method to which you are piping.</p>
</div>
<h1 class="fs25">ALine splitting</h1>
<p class="f-s15">You can split a template action over two or more lines. For example, these are equivalent:</p>
<div class="container-code-sec">
<p>{{ $v := or $arg1 $arg2 }}</p>
<p>{{ $v := or
$arg1
$arg2
}}</p>
</div>
<p class="f-s15">You can also split raw string literals over two or more lines. For example, these are equivalent:</p>
<div class="container-code-sec">
<pre><code>{{ $msg := &quot;This is line one.\nThis is line two.&quot; }}

{{ $msg := `This is line one.
This is line two.`
}}
</code></pre>
</div>
</div>
</section>
  
<section id="examples">
        <div><h1 class="f-s25">Example</h1>
<p class="f-s20">
This limited set of contrived examples demonstrates some of concepts described above. Please see the functions, methods, and templates documentation for specific examples.
</p>
<h1 class="f-s25">Conditional block</h1>
<p class="f-s20">See documentation for if, else, and end.</p>
<div class="container-code-sec">
<p>{{ $var := 42 }}
{{ if eq $var 6 }}
{{ print &ldquo;var is 6&rdquo; }}
{{ else if eq $var 7 }}
{{ print &ldquo;var is 7&rdquo; }}
{{ else if eq $var 42 }}
{{ print &ldquo;var is 42&rdquo; }}
{{ else }}
{{ print &ldquo;var is something else&rdquo; }}
{{ end }}</p>
</div>
<h1 class="fs25">Logical operator</h1>
<p class="f-s20">See documentation for and and or.</p>
<div class="container-code-sec">
<pre><code>  {{ $v1 := true }}
  {{ $v2 := false }}
  {{ $v3 := false }}
  {{ $result := false }}

  {{ if and $v1 $v2 $v3 }}
    {{ $result = true }}
  {{ end }}
  {{ $result }} → false

  {{ if or $v1 $v2 $v3 }}
    {{ $result = true }}
  {{ end }}
  {{ $result }} → true
</code></pre>
</div>
<h1 class="fs25">Loops</h1>
<p class="f-s20">See documentation for range, else, and end.</p>
<div class="container-code-sec">
<pre><code>{{ $s := slice &quot;foo&quot; &quot;bar&quot; &quot;baz&quot; }}
{{ range $s }}
  &lt;p&gt;{{ . }}&lt;/p&gt;
{{ else }}
  &lt;p&gt;The collection is empty&lt;/p&gt;
{{ end }}
</code></pre>
</div>
<p class="f-s20">Use the seq function to loop a specified number of times:</p>
<div class="container-code-sec">
<p>{{ $total := 0 }}
{{ range seq 4 }}
{{ $total = add $total . }}
{{ end }}
{{ $total }} → 10</p>
</div>
<h1 class="fs25">Rebind context</h1>
<p class="f-s20">See documentation for with, else, and end.</p>
<div class="container-code-sec">
<p>{{ $var := &ldquo;foo&rdquo; }}
{{ with $var }}
{{ . }} → foo
{{ else }}
{{ print &ldquo;var is falsy&rdquo; }}
{{ end }}</p>
</div>
<p class="f-s20">To test multiple conditions:</p>
<div class="container-code-sec">
<p>{{ $v1 := 0 }}
{{ $v2 := 42 }}
{{ with $v1 }}
{{ . }}
{{ else with $v2 }}
{{ . }} → 42
{{ else }}
{{ print &ldquo;v1 and v2 are falsy&rdquo; }}
{{ end }}</p>
</div></div>
</section>
  
<section id="functions">
        <div><h1 class="f-s25">Function</h1>
<p class="f-s20">
Used within a template action, a function takes one or more arguments and returns a value. Unlike methods, functions are not associated with an object.
</p>
<p class="f-s20">Go’s text/template and html/template packages provide a small set of functions, operators, and statements for general use. See the go-templates section of the function documentation for details.</p>
<p class="f-s20">
Hugo provides hundreds of custom functions categorized by namespace. For example, the strings namespace includes these and other functions:</p>
<p class="f-s20">As shown above, frequently used functions have an alias. Use aliases in your templates to reduce code length.</p>
<p class="f-s20">When calling a function, separate the arguments from the function, and from each other, with a space. For example:</p>
<div class="container-code-sec">
<p>{{ $total := add 1 2 3 4 }}</p>
</div></div>
</section>
  

<section id="include">
        <div><h1 class="f-s25">Include</h1>
<p class="f-s20">Use the template function to include one or more of Hugo’s embedded templates:</p>
<div class="container-code-sec">
<pre><code>{{ template &quot;_internal/google_analytics.html&quot; . }}
{{ template &quot;_internal/opengraph&quot; . }}
{{ template &quot;_internal/pagination.html&quot; . }}
{{ template &quot;_internal/schema.html&quot; . }}
{{ template &quot;_internal/twitter_cards.html&quot; . }}
</code></pre>
</div>
<p class="f-s20">Use the partial or partialCached function to include one or more partial templates:</p>
<div class="container-code-sec">
<pre><code>{{ partial &quot;breadcrumbs.html&quot; . }}
{{ partialCached &quot;css.html&quot; . }}
</code></pre>
</div><p class="f-s20">Create your partial templates in the layouts/partials directory.</p>
<div class="container-sd-sec">
In the examples above, note that we are passing the current context (the dot) to each of the templates.
</div>
</div>
 </section>
  

<section id="methods">
        <div><h1 class="f-s25">Methods</h1>
<p class="f-s20">Used within a template action and associated with an object, a method takes zero or more arguments and either returns a value or performs an action.</p>
<p class="f-s20">The most commonly accessed objects are the Page and Site objects. This is a small sampling of the methods available to each object.</p>
<p class="f-s20">Chain the method to its object with a dot (.) as shown below, remembering that the leading dot represents the current context.</p>
<pre class="f-s15">layouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>{{ .Site.Title }} → My Site Title
{{ .Title }} → My Page Title
</code></pre>
</div>
<p class="f-s20">Some methods take an argument. Separate the argument from the method with a space. For example:</p>
<pre class="f-s15">layouts/_default/single.html</pre>
<div class="container-code-sec">
<pre><code>{{ $page := .Page.GetPage &quot;/books/les-miserables&quot; }}
{{ $page.Title }} → Les Misérables
</code></pre>
</div>
</div>
</section>
  

<section id="variables">
        <div><h1 class="f-s25">Variables</h1>
<p class="f-s15">A variable is a user-defined identifier prepended with a dollar sign ($), representing a value of any data type, initialized or assigned within a template action. For example, $foo and $bar are variables.</p>
<p class="f-s15">Variables may contain scalars, slices, maps, or objects.</p>
<p class="f-s15">Use := to initialize a variable, and use = to assign a value to a variable that has been previously initialized. For example:</p>
<div class="container-code-sec">
<pre><code>{{ $total := 3 }}
{{ range slice 7 11 21 }}
{{ $total = add $total . }}
{{ end }}
{{ $total }} → 42
</code></pre>
</div>
<p class="f-s15">Variables initialized inside of an if, range, or with block are scoped to the block. Variables initialized outside of these blocks are scoped to the template.</p>
<p class="f-s15">With variables that represent a slice or map, use the index function to return the desired value.</p>
<div class="container-code-sec">
<pre><code>{{ $slice := slice &quot;foo&quot; &quot;bar&quot; &quot;baz&quot; }}
{{ index $slice 2 }} → baz

{{ $map := dict &quot;a&quot; &quot;foo&quot; &quot;b&quot; &quot;bar&quot; &quot;c&quot; &quot;baz&quot; }}
{{ index $map &quot;c&quot; }} → baz
</code></pre>
</div>
<div class="container-sd-sec mr-tb">
 Slices and arrays are zero-based; element 0 is the first element.
</div>
<p class="f-s15">
With variables that represent a map or object, chain identifiers to return the desired value or to access the desired method.
</p>
<div class="container-code-sec">
<pre><code>{{ $map := dict &quot;a&quot; &quot;foo&quot; &quot;b&quot; &quot;bar&quot; &quot;c&quot; &quot;baz&quot; }}
{{ $map.c }} → baz

{{ $homePage := .Site.Home }}
{{ $homePage.Title }} → My Homepage

</code></pre>
</div>
<div class="container-sd-sec mr-tb">
As seen above, object and method names are capitalized. Although not required, to avoid confusion we recommend beginning variable and map key names with a lowercase letter or underscore
</div>
</div>
</section>