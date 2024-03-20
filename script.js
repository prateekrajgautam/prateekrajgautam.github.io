//header
load("./style.scss")

var headerslist='Introduction,Resume,Highlights,Research,Contact'.split(",")

append(app,gen(header,"header",gen(nav,"nav",gen(ul,"navlist"),"nav"),"header"))
append(app,gen(main,'main'))
append(app,gen(footer,'footer'))

headerslist.forEach(h=>{
    
    append(navlist,gen(li,"",gen(a,"",h,"",`#${h}`)))
    var sec = h;
    append(main,gen(section,sec,gen(h1,"",sec),"section container"))
})



//introduction
introArray = [`
Hi! I am <b>Dr. Prateek Raj Gautam</b>.`,
`I earned my <b>Ph.D.</b> in 2022 from <b>Motilal Nehru National Institute of Technology    Allahabad</b>,   Prayagraj, India. under the supervision of <b>Dr. Arvind Kumar</b> (Associate Professor ECED, MNNIT) on the topic "<b><i>Energy-Efficient 2D and 3D Localization in Wireless Sensor Networks using Single Anchor Node.</i></b>"`,
`I have <b> six years of teaching experience</b> as an <b>Assistant Professor</b> at Allenhouse    Institute of Technology and Naraina College of Engineering and Technology.`,
`I have received <b>M.Tech.</b> degree in electronics and communication engineering from <b>Harcourt Butler Technological Institute</b> Kanpur, India, in 2011.`,
`My research interests are in the energy-efficient scheme for <b>wireless sensor networks (WSN), internet of things (IoT), image processing, CDMA, IDMA, and brain wave mapping</b>.`,
`I have advanced experience with subject-related software like <b>MATLAB, Python, CST Studio Suite, Arduino, PlatformIO, and      LTspice.</b>`,
`I have good skills in producing high-quality documents and illustrations in <b>LaTeX/Tikz</b>, (2d and 3d) drawing and animation software like <b>Inkscape, GIMP, and Blender</b>.`,
`I have internet in web and desktop app development using <b>HTML, CSS, JS, Python, Django, Kivy, Eel, and WordPress </b>.`,
`I would like to research wireless networks, WSNs, IoTs, and their application. <i>Currently, I am exploring optimization and machine learning and its applications in Wireless Sensor Networks.</i>`,
`Please find the attached resume for your consideration. `,
`Thank you. <b>Have a nice day.</b>`
]


introArray.forEach(row=>{
    append(Introduction,gen(p,"",row,"p1 selectEnable"))
})





var pdfurl="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2024_V01.pdf"
var pdfurl2="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2024_V01_schooling.pdf"
var pdfurlrelative="./V01/Dr.PrateekRajGautam_Resume_2024_V01.pdf"
var phdpdfurl=`https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/MainPPTNoVideo.pdf`
var pnglist



append(Resume,gen(div,"",gen(object,"pdfObject","","pdfObject",{data:`${pdfurlrelative}#page=1`,type:"application/pdf"}),"pdfrelated"))
append(pdfObject,gen(div,"pdffallback","","pdffallback"))

getfile("./V01/imagelist.txt",f=>{f.split("\n").filter(Boolean).map(f=>{
    var imgurl="./V01/"+f;  
    append(pdffallback,gen(a,"",gen(img,"","","",imgurl),"",{href:pdfurl,target:"_blank"}))
});
append(pdffallback,gen(p,"","This browser does not support PDF!"))
})


//highlights

var highlights=[
  {
    "NameURL": "https://mac2023.github.io",
    "Description": "INTERNATIONAL CONFERENCE ON MICROWAVE, ANTENNA, AND COMMUNICATION\n\n                Organised by ECED MNNIT Allahabad"
  },
  {
    "NameURL": "https://generatorjs.mgeek.in",
    "Description": "Three function Javascript library for Website frontend design with less typing, less switching to\n                HTML CSS."
  },
  {
    "NameURL": "https://pygenerator.mgeek.in",
    "Description": "Three function python web templating library comming soon..."
  },
  {
    "NameURL": "http://mnnit.ac.in/vcas2018/",
    "Description": "International Conference on VLSI, Communication and Signal Processing\n\n                Organised by ECED MNNIT Allahabad"
  },
  {
    "NameURL": "https://fwh.mgeek.in/",
    "Description": "Wifi hotspot creator on windows xp written in python and GUI designed using python/Tkinter"
  },
  {
    "NameURL": "https://formhelper.mgeek.in/",
    "Description": "A software to fill web forms from data saved in excel sheets. Written in python and GUI designed\n                using\n                KIVY"
  },
  {
    "NameURL": "http://mgeek.in/",
    "Description": "Static Websited written jekyll and jekyll theme compiled with ruby gems."
  },
  {
    "NameURL": "https://easylist.mgeek.in/",
    "Description": "Shopping and ordering website for URC Tughlakabad to facilitate ordering during COVID-19 pandamic."
  }
]




for (i=0;i<highlights.length;i++){
  var url=highlights[i].NameURL
  var text=highlights[i].Description

  var detailVar="d"+i
  append(Highlights,gen(details,detailVar,gen(summary,"",gen(a,"",url.split("//")[1].toUpperCase(),"",{href:url,title:url,target:"_blank"}))))
  append("#"+detailVar,gen(p,"",text))
  append("#"+detailVar,gen(a,"","View","",{href:url,target:"_blank"}))
}

//youtube 
var ytembed=`<p><iframe width="560" height="315" src="https://www.youtube.com/embed/nIwndbfBDFU" title="" frameBorder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen><br>Powered by <a href="https://youtubeembedcode.com">embed youtube video</a> and <a href="http://eucasinos.se/">eu casino</a></iframe></p>`
append(Research, ytembed) 
append(Research,gen(div,"",gen(object,"phdpdfObject","","pdfObject",{data:`${phdpdfurl}#page=1`,type:"application/pdf"}),"pdfrelated"))
append(phdpdfObject,gen(div,"pdffallback","","pdffallback"))
append(pdffallback,gen(a,"",'download presentation',"",{href:phdpdfurl,target:"_blank"}))
//contacts

var ContactLinks = {
  Research: {
    Researchgate: "https://www.researchgate.net/profile/Prateek-Raj-Gautam",
    "Google scholar":
      "https://scholar.google.co.in/citations?user=slZHj6cAAAAJ&hl=en",
    ORCID: "https://orcid.org/0000-0002-2889-4275",
    "Publons/ResearchID":
      "https://publons.com/researcher/2100291/prateek-raj-gautam",
    Scopus: "https://www.scopus.com/authid/detail.uri?authorId=57194277572",
  },

  Social: {
    Telegram: "https://t.me/prateekrajgautam",
    Linkedin: "https://www.linkedin.com/in/prateekrajgautam/",
    Github: "https://github.com/prateekrajgautam",
    Gmail:
      "mailto:prateekrajgautam@gmail.com?subject=from personal website&body=Hello, Dear Dr. Prateek Raj Gautam",
    Whatsapp: "https://wa.me/+919151404899?text=From%20personal%20website",
  },
};

Object.entries(ContactLinks).forEach(entry=>{
    const [key,val]=entry;
    append(Contact,gen(div,key+"section",gen(h3,"",key)))
    var sectionName="#"+key+"section"
    append(sectionName,gen(ul,key+"links","","contact-links"))
    var linkroot="#"+key+"links"

    Object.entries(val).forEach(contacturl=>{
        var [Name,Url]=contacturl
        // log(Name,Url)
        append(linkroot,gen(li,"",gen(a,"",Name,"",{href:Url,target:"_blank"})))
    })

})




append(main,gen(section,"misc",gen(h1,"","Forward Resume"),"container section"))

append(misc,
  gen(button,'',
    gen(a,
      "",
      "Download Detailed Resume",
      "selectDisable",
      {href:pdfurl2,target:"_blank"}
    ),
    "button"
  )
)



var forwardasemail=`mailto:edit?cc=prateekrajgautam@gmail.com&subject=Application for the post of Assistant Professor&body=Dear Sir/Madam

        Please consider attached resume for the post of Assistant Professor in ECE, Electrical, and CS of your Institute.
        
        Download Resume: https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2024_V01_schooling.pdf    
      
        -- 
        Dr. Prateek Raj Gautam  
        9151 404 899  
        https://prateekrajgautam.github.io   
      &attachment=https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2024_V01_schooling.pdf`


      
append(misc,
  gen(button,'',
    gen(a,
      "",
      "Forward as email",
      "selectDisable",
      {href:forwardasemail,target:"_blank"}
    ),
    "button"
  )
)


$$.init()
