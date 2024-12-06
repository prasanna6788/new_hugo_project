+++
date = '2024-11-13T16:35:59+05:30'
draft = true
title = 'Template Lookup order'
description="Create templates to render your content, resources, and data."
weight=3
categories=['template']
[sections]
sections = [
  { id = "lookup_rules", name = "Lookup rules" },
  { id = "target_template", name = "Target a template" },
  { id = "home_templates", name = "Home templates" },
  { id = "single_templates", name = "Single templates" },
  { id = "section_templates", name = "Section templates" },
  { id = "taxonomy_templates", name = "Taxonomy templates" },
  { id = "term_templates", name = "Term templates" },
  { id = "rss_templates", name = "RSS templates" }
]
+++
<p></p>
<h3 class="clr-sky">Template <span class="clr-sky" style="margin-left:20px;">Fundamentals</span></h3>
<h1 class="pg-heading" >Introduction to Templating</h1>
<hr>
<p class="pg-sub-hd">Create templates to render your content, resources, and data.<p>
<section id="lookup_rules">
<h1 class="f-s25"> Lookup rules</h1>
<p class="f-s15">Hugo takes the parameters listed below into consideratddion when choosing a template for a given page. The templates are ordered by specificity. This should feel natural, but look at the table below for concrete examples of the different parameter variations.</p>
<h1 class="f-s15"><b>Kind<b></h1>
<p class="f-s15">
The page Kind (the home page is one). See the example tables below per kind. This also determines if it is a single page (i.e. a regular content page. We then look for a template in _default/single.html for HTML) or a list page (section listings, home page, taxonomy lists, taxonomy terms. We then look for a template in _default/list.html for HTML).
</p>
<h1 class="f-s15"><b>Layout<b></h1>
<p class="f-s15">
Can be set in front matter.
</p>
<h1 class="f-s15"><b>Output Format
<b></h1>
<p class="f-s15">
See Custom Output Formats. An output format has both a name (e.g. rss, amp, html) and a suffix (e.g. xml, html). We prefer matches with both (e.g. index.amp.html), but look for less specific templates.
</p>
<p class="f-s15">
Note that if the output format’s Media Type has more than one suffix defined, only the first is considered.
</p>
<h1 class="f-s15"><b>Language<b></h1>
<p class="f-s15">
We will consider a language tag in the template name. If the site language is fr, index.fr.amp.html will win over index.amp.html, but index.amp.html will be chosen before index.fr.html.
</p>
<h1 class="f-s15"><b>Type<b></h1>
<p class="f-s15">
Is value of type if set in front matter, else it is the name of the root section (e.g. “blog”). It will always have a value, so if not set, the value is “page”.
</p>
<h1 class="f-s15"><b>Section<b></h1>
<p class="f-s15">
Is relevant for section, taxonomy and term types.
</p>
<div class="container-sd-sec">
   <p class="f-s15">
   Templates can live in either the project’s or the themes’ layout folders, and the most specific templates will be chosen. Hugo will interleave the lookups listed below, finding the most specific one either in the project or themes.
   </p>
</div>
</section>

<section id="target_template">
<h1 class="f-s25"> Target a template</h1>
<p class="f-s15">You cannot change the lookup order to target a content page, but you can change a content page to target a template. Specify type, layout, or both in front matter.</p>
<p class="f-s15">Consider this content structure:</p>
<div class="container-code-sec">
<pre class="f-10">
content/
├── about.md
└── contact.md
</pre>
</div>
<p class="f-s15">Files in the root of the content directory have a content type of page. To render these pages with a unique template, create a matching subdirectory:</p>
<div class="container-code-sec">
<pre class="f-10">
layouts/
└── page/
    └── single.html
</pre>
</div>
<p class="f-s15">content/contact.md.</p>
<p class="f-s15">Consider this content structure:</p>
<div class="container-code-sec">
<pre class="f-10">
layout: contact
title: Contact
</pre>
</div>
<p class="f-s15">Then create the template for the contact page:</p>
<div class="container-code-sec">
<pre class="f-10">
layouts/
└── page/
    └── contact.html  <-- renders contact.md
    └── single.html   <-- renders about.md
</pre>
</div>
<p class="f-s15">As a content type, the word page is vague. Perhaps miscellaneous would be better. Add type to the front matter of each page:</p>
<p class="f-s15">content/about.md.</p>
<div class="container-code-sec">
<pre class="f-10">
title: About
type: miscellaneous
</pre>
</div>
<p class="f-s15">content/about.md.</p>
<div class="container-code-sec">
<pre class="f-10">
layout: contact
title: Contact
type: miscellaneous
</pre>
</div>
<p class="f-s15">Now place the layouts in the corresponding directory:</p>
<div class="container-code-sec">
<pre class="f-10">
layouts/
└── miscellaneous/
    └── contact.html  <-- renders contact.md
    └── single.html   <-- renders about.md
<pre>
</div>
</section>

<section id="home_templates">
<h1 class="f-s25">Home templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
</table>

</section>
<section id="single_templates">
<h1 class="f-s25">Single templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
</table>
</section>

<section id="section_templates">
<h1 class="f-s25">Section templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<h1 class="f-s25">Single templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</table>
</section>

<section id="taxonomy_templates">
<h1 class="f-s25">Taxanomy templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</table>
</section>
<section id="term_templates">
<h1 class="f-s25">Term templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<p class="f-s15">The examples below assume the following site configuration:</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</table>
</section>

<section id="rss_templates">
<h1 class="f-s25">Term templates </h1>
<p class="f-s15">These template paths are sorted by specificity in descending order. The least specific path is at the bottom of each list.</p>
<p class="f-s15">The examples below assume the following site configuration:</p>
<table>
<tr>
    <th>Example</th>
    <th>OutputFarmat</th>
    <th>Suffix</th>
    <th>Template Lookup order</th>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr>
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</tr>
<tr class="tgray">
    <td class="txt-cen">Home page</td>
    <td class="txt-cen">html</td>
    <td class="txt-cen">html</td>
    <td>
     <ol>
        <li>layouts/index.html.html</li>
        <li>layouts/home.html.html</li>
        <li>layouts/list.html.html</li>
        <li>layouts/index.html</li>
        <li>layouts/home.html</li>
        <li>layouts/list.html</li>
        <li>layouts/_default/index.html.html</li>
        <li>layouts/_default/home.html.html</li>
        <li>layouts/_default/list.html.html</li>
        <li>layouts/_default/index.html</li>
        <li>layouts/_default/home.html</li>
        <li>layouts/_default/list.html</li>
     <ol>
</td>
</table>
</section>
</section>