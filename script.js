//header
load("./style.css")

var headerslist='Introduction,Resume,Highlights,Contact'.split(",")

append(app,gen(header,"header",gen(nav,"nav",gen(ul,"navlist"),"nav"),"header"))
append(app,gen(main,'main'))
append(app,gen(footer,'footer'))

headerslist.forEach(h=>{
    
    append(navlist,gen(li,"",gen(a,"",h,"",`#${h}`)))
    var sec = h;
    append(main,gen(section,sec,gen(h1,sec,sec),"section container"))
})



//introduction
introArray = [`
Hi! I am <b>Dr. Prateek Raj Gautam</b>.
`,
    `
I earned my <b>Ph.D.</b> in 2022 from <b>Motilal Nehru National Institute of Technology    Allahabad</b>,   Prayagraj, India. under the supervision of <b>Dr. Arvind Kumar</b> (Associate Professor ECED, MNNIT) on the
topic "<b><i>Energy-Efficient 2D and 3D Localization in Wireless Sensor Networks using Single Anchor
Node.</i></b>"
`,
    `
I have <b> four years of teaching experience</b> as an <b>Assistant Professor</b> at Allenhouse    Institute of Technology and Naraina College of Engineering and Technology.

`,
    `
I have received <b>M.Tech.</b> degree in electronics and communication engineering from <b>Harcourt Butler
Technological Institute</b> Kanpur, India, in 2011.
`,
    `My research interests are in the energy-efficient scheme for <b>wireless sensor networks (WSN),
internet      of things (IoT), image
processing, CDMA, IDMA, and brain wave mapping</b>.

`,
    `
I have advanced experience with subject-related software like <b>MATLAB, Python, CST Studio Suite, Arduino, PlatformIO, and      LTspice.</b>
`,
    ` I have good skills in producing high-quality documents and illustrations in <b>LaTeX/Tikz</b>
and
2d and 3d drawing and animation software like <b>Inkscape, GIMP, and Blender</b>.

`,
    ` I have internet in web and desktop app development using <b>HTML, CSS, JS, Python, Django,
Kivy, Eel, and WordPress </b>.

`,
    ` I would like to research wireless networks, WSNs, IoTs, and their application.
<i>Currently,
I
am exploring optimization and machine learning and its applications in Wireless Sensor Networks.</i>
`,
    ` Please find the attached resume for your consideration. `,
    ` Thank you. <b>Have a nice day.</b>`
]


introArray.forEach(row=>{
    append(Introduction,gen(p,"",row,"p1 selectEnable"))
})






var pdfurl="./V01/Dr.PrateekRajGautam_Resume_2023_V01.pdf"


append(Resume,gen(div,"",gen(object,"","","pdfObject",{data:`${pdfurl}#page=1`,type:"application/pdf"}),"pdfrelated"))



// console.log("loaded")
// var intro = document.getElementById("introduction").innerHTML
// var embedintro = document.getElementsByClassName("intro")
// embedintro[0].innerHTML = intro + embedintro[0].innerHTML;
// function copyHTML() {
//     var data = document.getElementById("code").innerHTML
//     // navigator.clipboard.writeText(data)
//     // alert("Copied to clip")
// }


// introArray = ["hi", "how are you"]
// introduction.innerHTML += gen(p, "", introArray, 'p1')
