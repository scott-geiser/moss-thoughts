import tinyImg from './small_template.jpg'
import tinySundew from './Spoonleaf_Sundew/sundew_block.jpg'
//probably will need fetch to grab the whole folder

/* Note: When deploy unimport all images and instead link to them from image folder with URL? For better pathing..
then fetch this data through context. And using filter to find each given on the path? */

export const mossData = [
    {
        latin: "polytrichum commune",
        commonName: "Common Haircap",
        disc: "A common species of of moss, found throughout the Northern Hemisphere of North America.",
        category: "moss",
        smallImg: tinyImg,
        imgOne: null,
        imgTwo: null,
        imgThree: null,
        imgFour: null,
        imgFive: null,
        imgSix: null,
        id: 1,
    }, 
    {
        latin: "Cladonia rangiferina",
        commonName: "Reindeer Lichen",
        disc: "While it may look like it's moss, it's not!",
        category: "lichen",
        smallImg: tinyImg,
        imgOne: null,
        imgTwo: null,
        imgThree: null,
        imgFour: null,
        imgFive: null,
        imgSix: null,
        id: 2,
    }, 
    {
        latin: "Drosera intermedia",
        commonName: "Spoonleaf Sundew",
        disc: "To suppliment poor nutritional soils, sundews secrete a sugary nectar that attracts insects to their stalks. Each stalk is covered in  mucilaginous glands, which trap the insects and subsequently digest them. ",
        category: "carnivore",
        smallImg: tinySundew,
        imgOne: null,
        imgTwo: null,
        imgThree: null,
        imgFour: null,
        imgFive: null,
        imgSix: null,
        id: 3,
    }, 
]


/* When upload to Github have to change img urls. require function is used for local */

/* directory:
latin: scientific name
commonName: common name
disc: description
catagory: moss, lich, or other
smallImg: the small square 
imgOne: null or file location
imgTwo:
imgThree:
imgFour:
imgFive:
imgSix:
 */