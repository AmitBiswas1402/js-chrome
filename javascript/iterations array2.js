const prolang = ['html', 'css', 'js', 'c', 'py', 'ipynb']

prolang.forEach( (item, index, array)=>{  // for each loop
    // console.log(item, index, array);
} )

const coding=[
    {
        name: "HTML",
        filename: "html"
    },
    {
        name: "CSS",
        filename: "css"
    },
    {
        name: "JavaScript",
        filename: "js"
    }
]

coding.forEach( (item) => {
    
    console.log(item.filename);
} )