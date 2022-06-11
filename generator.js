//function to declare basic tags as const
const app = document.getElementById('app')
function loadBasicHtmlVariables(list) {
    list = list.replace(' ', ',').replace(',,', ',')
    let start = 0;
    let end = list.length
    let comaAt = []
    for (let i = 0; i < list.length; i++) {
        if (list[i] == ',') comaAt[comaAt.length] = i
    }
    if (comaAt.length == 0) eval(eval(`const ${list}='${list}';`))
    if (comaAt.length > 0) {
        comaAt[comaAt.length] = end
        for (let i = 0; i < comaAt.length; i++) {
            var tag = list.slice(start, comaAt[i])
            start = comaAt[i] + 1
            let expression = `window.${tag} = '${tag}'`
            window.eval(expression)
        }
    }
}




function objtohtml(obj) {
    // console.log(obj)
    let elem = document.createElement(div)
    if (Array.isArray(obj) != true) {
        var keylist = Object.keys(obj)
        var tag = div
        if (obj.tag != undefined) tag = obj.tag
        elem = document.createElement(tag)
        keylist.forEach((key) => {
            eval(`elem.${key}=obj.${key}`)
        })
    }
    if (Array.isArray(obj) == true) {
        var placeholder = ''
        // var elem = document.createElement(div)
        for (i = 0; i < obj.length; i++) {
            objCurrent = obj[i]
            var keylist = Object.keys(objCurrent)
            var tag = div
            if (objCurrent.tag != undefined) tag = objCurrent.tag
            elem = document.createElement(tag)
            keylist.forEach((key) => {
                eval(`elem.${key}=objCurrent.${key}`)
            })

            placeholder += elem.outerHTML

        }

        elem.outerHTML = placeholder
        // console.log(elem.outerHTML)

    }

    return elem.outerHTML
}




//generator function

//eel.expose(gen)
function gen(elementtype, idin, htmlin, classin, src) {

    if (htmlin != undefined) {
        // console.log(htmlin.isArray)
        if (Array.isArray(htmlin) != true) {
            var element = document.createElement(elementtype);
            if (idin != undefined && idin != "") {
                element.id = idin;
            }
            if (htmlin.nodeName === undefined) {
                // console.log(typeof (htmlin))
                if (typeof (htmlin) != "object") {
                    if (elementtype == 'code' || elementtype == 'pre') {
                        element.innerText = htmlin;
                    } else if (elementtype == 'input') {
                        element.value = htmlin;
                    } else if (elementtype == 'img') {
                        element.alt = htmlin;
                    }
                    else {
                        element.innerHTML = htmlin;
                    }
                }
                if (typeof (htmlin) == "object") {
                    element.innerHTML = htmlin;
                    if (elementtype == 'input') element.value = htmlin;
                    if (elementtype == 'img') element.alt = htmlin;
                }
            };
            if (htmlin.nodeName != undefined) {
                element.append(htmlin);
                // console.log(htmlin);
                // console.log(htmlin.nodeName);
            };
            if (classin != undefined && classin != "") {
                // element.classList.add(classin);
                element.classList += classin.replace(',', ' ').replace(', ', ' ');
            }
        }
        // console.log("array")
        // console.log(htmlin)



        //generate multiple element if array
        if (Array.isArray(htmlin) == true) {
            // console.log(htmlin)
            // var element = [];

            var element = document.createElement("div")
            let arrayholder = document.createElement("div", "arrayholder", "")
            // console.log(htmlin.length)
            var checkfirstinput = htmlin[0]

            for (jj = 0; jj < htmlin.length; jj++) {

                //if not object 
                if (typeof checkfirstinput != 'object') {
                    var elementarray = document.createElement(elementtype);
                    if (idin != undefined && idin != "") {
                        elementarray.id = `${idin}-${jj}`;
                    }

                    //Array of html elements
                    if (htmlin[jj].nodeName === undefined) {
                        // console.log(typeof (htmlin))
                        if (typeof (htmlin) != "object") {
                            elementarray.innerHTML = htmlin[jj];
                            if (elementtype == 'input') elementarray.value = htmlin[jj];
                            if (elementtype == 'img') element.alt = htmlin[jj];
                        }
                        if (typeof (htmlin) == "object") {
                            elementarray.innerHTML = htmlin[jj];
                            if (elementtype == 'input') elementarray.value = htmlin[jj];
                            if (elementtype == 'img') element.alt = htmlin[jj];
                        }
                    };
                    //Array of strings non html
                    if (htmlin[jj].nodeName != undefined) {
                        elementarray.append(htmlin[jj]);
                        // console.log(htmlin);
                        // console.log(htmlin.nodeName);
                    };
                    if (classin != undefined && classin != "") {
                        // element.classList.add(classin);
                        elementarray.classList += classin.replace(',', ' ').replace(', ', ' ');
                    }
                }

                // if object
                if (typeof checkfirstinput == 'object') {
                    elementarray = objtohtml(htmlin[jj])
                    var elementtypeholder = document.createElement(elementtype)
                    elementtypeholder.append(elementarray)
                    elementarray = elementtypeholder
                }
                arrayholder.innerHTML += elementarray.outerHTML

            }
            element = arrayholder.innerHTML
            // console.log(element)
        }


    }

    if (htmlin == undefined) {
        var element = document.createElement(elementtype);
        if (idin != undefined && idin != "") {
            element.id = idin;
        }
        if (classin != undefined && classin != "") {
            // element.classList.add(classin);
            element.classList += classin.replace(',', ' ').replace(', ', ' ');
        }
    }

    if (src != undefined) {
        if (elementtype == 'a') { element.href = src } else { element.src = src }
    }
    return element;
};





//eel.expose(log)
function log(data = null, pos = 'after') {
    var logBlock = applog
    if (data === 'clear' || data === 'hide' || data === null) {
        logBlock.innerHTML = "";
        logBlock.style.display = 'none';
    } else {
        console.log(data)
        logBlock.style.display = 'flex';
        try {
            append(logBlock, [gen(code, '', data.innerHTML, 'code small'), data], pos)
        }
        catch (err) {
            append(logBlock, data, pos)
        }
    }
}





// function to load single or array of css and js files 

//eel.expose(load)
async function load(srcList, pos) {
    if (pos == undefined) { var pos = 'head' }
    if (Array.isArray(srcList) == true) {
        for (i = 0; i < srcList.length; i++) {
            var extension = ""
            currentLink = srcList[i]
            var extensionStart = 0
            var extensionEnd = currentLink.length
            for (let i = extensionEnd; i > 0; i--) {
                if (currentLink[i] == ".") {
                    extensionStart = i;
                    extension = currentLink.slice(extensionStart, extensionEnd)
                    break
                }
            }
            if (extension == ".js") {
                loadjs(srcList[i], pos)
            }
            if (extension == ".css") {
                loadcss(srcList[i], pos)
            }

            if (extension != ".js" && extension != ".css") {
                // console.log('loading object')
                loadobject(srcList[i], pos)
            }
        }
    }

    if (Array.isArray(srcList) == false) {
        currentLink = srcList
        var extensionStart = 0
        var extensionEnd = currentLink.length
        for (let i = extensionEnd; i > 0; i--) {
            if (currentLink == ".") {
                extensionStart = i;
                var extension = currentLink.slice(extensionStart, extensionEnd)
                break
            }
        }
        if (extension == ".js") {
            loadjs(currentLink, pos)
        }
        if (extension == ".css") {
            loadcss(currentLink, pos)
        }

        if (extension != ".js" && extension != ".css") {
            // console.log('loading object')
            loadobject(currentLink, pos)
        }
    }


    async function loadjs(src, pos) {
        var s = document.createElement("script");  // create a script DOM node
        s.type = 'text/javascript'
        s.src = src;  // set its src to the provided URL
        // s.async = true
        // s.defer = true
        s.setAttribute('async', '');
        s.setAttribute('defer', '');
        // document.head.appendChild(s);
        if (pos == 'head') {
            document.head.appendChild(s);
        } else if (pos == 'body') {
            document.body.appendChild(s);
        }
    }
    async function loadcss(link, pos) {
        var s = document.createElement("link");  // create a script DOM node
        s.rel = 'stylesheet';
        // s.type = 'text/javascript';
        s.href = srcList[i];  // set its src to the provided URL

        // script.crossorigin = "anonymous";
        // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
        // document.head.appendChild(s);
        // document.head.appendChild(s);
        if (pos == 'head') document.head.appendChild(s);
        if (pos == 'body') document.body.appendChild(s);
    }

    async function loadobject(obj, pos) {
        var keylist = Object.keys(obj)
        for (i = 0; i < keylist.length; i++) {
            var s = document.createElement(meta);
            s.setAttribute('name', keylist[i]);
            if (keylist[i] == 'title' || keylist[i] == 'description' || keylist[i] == 'type' || keylist[i] == 'url' || keylist[i] == 'image' || keylist[i] == 'logo' || keylist[i] == 'site_name') {
                s.setAttribute('property', `og:${keylist[i]}`);
            }
            s.setAttribute('content', obj[keylist[i]]);
            if (pos == 'body') { document.body.appendChild(s); }
            if (pos == 'head') {
                document.head.appendChild(s);
                //opengraph
            }
        }

        // var s = document.createElement("link");  // create a script DOM node
        // s.rel = 'stylesheet';
        // s.href = srcList[i];  // set its src to the provided URL
        // if (pos == 'head') document.head.appendChild(s);
        // if (pos == 'body') document.body.appendChild(s);
    }

}

function htmltostring(input) {
    var op = input.outerHTML.toString().replaceAll("&", '&amp;').replaceAll('</', '&lt;&#47;').replaceAll("<", "&lt;").replaceAll(">", '&gt;')
    return op
}
const verb = htmltostring

//To aimate typing
// var resp = typeAnimate(element, testStr);
// var resp = typeAnimate(element, testStr,delay);
async function typeAnimate(elemid, textstr, delay = 50, start = 0) {
    var elem = document.getElementById(elemid);
    var cursor = gen(span, 'cursor', '', 'cursor');
    if (start < textstr.length) {
        start = start + 1;
        elem.innerHTML = textstr.slice(0, start);
        elem.appendChild(cursor);
        setTimeout(typeAnimate, delay, elemid, textstr, delay, start);
        if (start == textstr.length) {
            state = 'typed';
            cursor.remove();
            cursor.style.display = 'none'
            // console.log(state);
            return state;
        }
    }


    // console.log(state);
    // return state;
}



//eel.expose(append)
function append(parentid, childhtml, position = 'after') {
    console.log(parentid)
    let parentElement = document.getElementById(parentid);
    parentElement.innerHTML += ''
    // console.log(parent.innerHTML)
    // console.log(T.innerHTML)
    // console.clear()
    // log('append')

    var T = document.createElement('div')
    T.id = 'T'
    T.innerHTML = ""
    if (Array.isArray(childhtml) == true) {
        // console.log('array')
        for (let i = 0; i < childhtml.length; i++) {
            // console.log([i, childhtml.length])
            //if not html
            if (typeof childhtml[i] == 'string') {
                // console.log(`string ${i}`)
                T.innerHTML += childhtml[i]
            }

            if (typeof childhtml[i] != 'string') {
                // console.log(`'not string'${i}`)
                //HTML
                if (childhtml[i].outerHTML != undefined) {
                    // console.log('not object')
                    T.innerHTML += childhtml[i].outerHTML
                }
                //JSON Object
                if (childhtml[i].outerHTML == undefined) {
                    // console.log('object')
                    T.innerHTML += objtohtml(childhtml[i])
                }
            }

        }

    }
    if (Array.isArray(childhtml) == false) {

        if (childhtml != undefined) {
            // console.log('not array')
            // console.log(childhtml)
            //HTML STRING
            if (typeof childhtml == 'string') {
                // console.log('string')
                T.innerHTML += childhtml
            }
            if (typeof childhtml != 'string') {
                //HTML
                console.log(childhtml)
                if (childhtml.outerHTML != undefined) {
                    T.innerHTML += childhtml.outerHTML
                }
                //JSON Object
                if (childhtml.outerHTML == undefined) {
                    T.innerHTML += childhtml
                }
            }
        }
    }

    // console.log(T)

    if (position == 'after') {
        parentElement.innerHTML = parentElement.innerHTML + T.innerHTML
        // console.log(T)
        // parentElement.innerHTML = T.innerHTML
    }
    if (position == 'before') {
        parentElement.innerHTML = T.innerHTML + parentElement.innerHTML
    }
    if (position == 'over') {
        if (T.innerHTML != null) parentElement.innerHTML = T.innerHTML
        if (T.innerHTML == null) parentElement.innerHTML = ''
    }
    if (position == 'replace') {
        parentElement.outerHTML = T.innerHTML
    }

    // return parentElement

}




ListOfStyles = [
    // `https://generatorjs.mgeek.in/cdn/style/sitestyle.css`,
    // `https://generatorjs.mgeek.in/cdn/style/pagestyle.css`,
    `../cdn/style/sitestyle.css`,
    `../cdn/style/pagestyle.css`,
]
ListOfScripts = [
    `./defaults.js`,
    `./script.js`,
]


let listOfBasicHtmlTags = 'div,p,span,b,i,img,video,picture,audio,canvas,svg,h1,h2,h3,h4,h5,h6,table,thead,tbody,tr,td,ul,li,ol,a,textarea,input,select,option,checkbox,radio,button,embed,object,iframe,kbd,code,dl,dt,dd,meta,pre,form,section,main,aside,header,footer,nav,meta,head,body,dialog,details,summary,figure,figcaption';
loadBasicHtmlVariables(listOfBasicHtmlTags)

function loadDefaultApp() {
    append('app', '', 'over')
    // load(ListOfStyles);
    append("app",
        [
            gen("div", 'applog', "", "appcontainer"),
            gen("header", 'appheader', "", 'header appcontainer'),
            gen("main", 'appmain', "", 'main appcontainer'),
            gen("footer", 'appfooter', "", 'footer appcontainer'),
            gen("div", 'copyright')
        ]
    )
    append(
        "appmain", [gen('h1', "", 'Designed with GeneratorJs'),
        gen(a, '', 'Visit https://generatorjs.mgeek.in for more information', "", "https://generatorjs.mgeek.in")
    ]
    )

    // load(ListOfScripts);
}


function loadCopyright() {
    append("copyright", [
        gen("span", "copyurl", `Designed with <a href="https://generatorjs.mgeek.in">GeneratorJs</a> &copy 2022 <a href="http://mgeek.in">mGeek.in</a>`),
        gen("span", "copyauthor", `Designed by <a href="http://mgeek.in/webmaster">Dr. Prateek Raj Gautam</a>`)
    ], 'over')
};



// load(ListOfStyles);

function addCopyfunction(c) {
    // c.append(gen(span, '', "", 'copyIcon'))
    c.addEventListener('click', (e) => {
        var copyText = e.target.innerText
        // console.log(copyText)
        navigator.clipboard.writeText(copyText)

    })
}
window.onload = () => {
    // window.scrollTo({ top: 0, behavior: 'smooth' })

    setTimeout(() => {

        console.log("generatorjs")

        var codeblocks = document.querySelectorAll('code,.code,pre,.copy')
        for (i = 0; i < codeblocks.length; i++) {
            addCopyfunction(codeblocks[i])
        }
    }, 2600)

};



function loaddefaultstyles() {
    load(ListOfStyles)
}
function loaddefaultapp() {
    load(ListOfScripts)
}
// loaddefaultstyles()
// loaddefaultapp()


window.addEventListener('load', function () {
    // loadApp()

    //eel.webdesing()
})



