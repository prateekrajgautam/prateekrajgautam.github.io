
var staticHeader = `
<header id="header" class="header">
<!--    <h1>Dr. Prateek Raj Gautam</h1>-->

<nav id="nav" class="nav">
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#resume">Resume</a></li>
  <li><a href="#software">Highlights</a></li>
  <!-- <li><a href=""></a></li> -->
  <li><a href="#contact">Contact</a></li>
</ul>
</nav>
</header>`





var staticResume = `<section id="resume" class="section pdf container">
<h1>Resume</h1>
<div class="pdfrelated">
  <object class="pdfObject" data="./V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf#page=1"
    type="application/pdf">
    <div id="pdfbackground" class="selectEnable">
      <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
        download><img class="pdfBgImg" max-width=80%
          src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-1.png" /></a>
      <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
        download><img class="pdfBgImg" max-width=80%
          src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-2.png" /></a>
      <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
        download><img class="pdfBgImg" max-width=80%
          src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-3.png" /></a>
      <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
        download><img class="pdfBgImg" max-width=80%
          src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-4.png" /></a>
      <br />

    </div>
    <p>PDF preview not available on mobile devices. Please download the resume from link below. </p><br />
    <div class="button">
      <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
        target="_download">
        Download Resume
      </a>
    </div>
  </object>

</div>

</section>`


var staticHighlights = `<section id="software" class="section container">
<h1>Softwares and websites developed</h1>




<table>
  <thead>
    <tr>
      <td>Name / URL</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://mac2023.github.io" target="_blank">MAC 2023</a></td>
      <td>INTERNATIONAL CONFERENCE ON MICROWAVE, ANTENNA, AND COMMUNICATION<br />

        Organised by ECED MNNIT Allahabad</td>
    </tr>
    <tr>
      <td><a href="https://generatorjs.mgeek.in" target="_blank">GeneratorJS</a></td>
      <td>Three function Javascript library for Website frontend design with less typing, less switching to
        HTML CSS.
      </td>
    </tr>
    <tr>
      <td><a href="https://pygenerator.mgeek.in" target="_blank">PyGenerator</a></td>
      <td>Three function python web templating library <i>comming soon...</i>
      </td>
    </tr>
    <tr>
      <td><a href="http://mnnit.ac.in/vcas2018/" target="_blank">VCAS 2018</a></td>
      <td>International Conference on VLSI, Communication and Signal Processing<br />

        Organised by ECED MNNIT Allahabad</td>
    </tr>
    <tr>
      <td><a href="https://fwh.mgeek.in/">Free Wifi Hotspot
        </a></td>
      <td>Wifi hotspot creator on windows xp written in python and GUI designed using python/Tkinter</td>
    </tr>
    <tr>
      <td><a href="https://formhelper.mgeek.in/">Form Helper</a></td>
      <td>A software to fill web forms from data saved in excel sheets. Written in python and GUI designed
        using
        KIVY</td>
    </tr>
    <tr>
      <td><a href="http://mgeek.in/">mGeek.in</a></td>
      <td>Static Websited written jekyll and jekyll theme compiled with ruby gems.</td>
    </tr>
    <tr>
      <td><a href="https://easylist.mgeek.in/">Easylist</a></td>
      <td>Shopping and ordering website for URC Tughlakabad to facilitate ordering during COVID-19 pandamic.
      </td>
    </tr>

  </tbody>
</table>
</section>`

var staticContact = `<section id="contact" class="section container">
<h1>Contact</h1>
<h3>
Research
</h3>
<ul id="research-links">
<li><a href="https://www.researchgate.net/profile/Prateek-Raj-Gautam" target="_blank">Researchgate</a></li>
<li><a href="https://scholar.google.co.in/citations?user=slZHj6cAAAAJ&hl=en" target="_blank">Google
    scholar</a>
</li>
<li><a href="https://orcid.org/0000-0002-2889-4275" target="_blank">ORCID</a></li>
<li><a href="https://publons.com/researcher/2100291/prateek-raj-gautam" target="_blank">Publons/ResearchID</a>
</li>
<li><a href="https://www.scopus.com/authid/detail.uri?authorId=57194277572" target="_blank">Scopus</a></li>

</ul>
</p>

<p>
<h3>
Social
</h3>
<ul id="social-links">
<li><a href="https://t.me/prateekrajgautam" target="_blank">Telegram</a></li>
<li><a href="https://www.linkedin.com/in/prateekrajgautam/" target="_blank">Linkedin</a></li>
<li><a href="https://github.com/prateekrajgautam" target="_blank">Github</a></li>
</li>

<li><a
    href="mailto:prateekrajgautam@gmail.com?subject=from personal website&body=Hello, Dear Dr. Prateek Raj Gautam">Gmail</a>
</li>
<li><a href="https://wa.me/+919151404899?text=From%20personal%20website">Whatsapp</a></li>
</ul>
</p>
</section>`

var staticEmail = `
<section id="Email" class="section container">


<div id="Embed" class="selectDisable" onclick="copyHTML">
<h2 class="selectDisable">Embed Code</h2>
<div id="code" class="intro selectEnable" onclick="copyHTML()">
  <a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"
    download class="selectEnable">
    <img class="embedImg selectEnable" width=80%
      src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-1.png" />
    <img class="embedImg selectEnable" width=80%
      src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-2.png" />
    <img class="embedImg selectEnable" width=80%
      src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-3.png" />
    <img class="embedImg selectEnable" width=80%
      src="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/PNG-4.png" /></a>
  <br />
</div>

</div>

<div class="button selectDisable">
<a href="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01_schooling.pdf"
  target="_download">
  Detailed Resume Download
</a>
</div>
<p>
<a
href="mailto:prateekrajgautam@gmail.com?subject=from personal website&body=Hello, Dear Dr. Prateek Raj Gautam">&copy
2022 prateekrajgautam</a>

<a
href="mailto:edit?cc=prateekrajgautam@gmail.com&subject=Application for the post of Assistant Professor&body=Dear Sir/Madam

Please consider attached resume for the post of Assistant Professor in ECE, Electrical, and CS of your Institute.

Download Resume: https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01_schooling.pdf    

-- 
Dr. Prateek Raj Gautam  
9151 404 899  
https://prateekrajgautam.github.io   
&attachment=https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2023_V01_schooling.pdf">Forward
as mail</a></p>
</section>



<footer class="selectDisable ">


</footer>`

