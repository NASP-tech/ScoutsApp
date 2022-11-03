import Vegetarianos from '../../imagenes/recipes/vegetarianos.jpg';
import Ovolactovegetariano from '../../imagenes/recipes/ovolactovegetarianismo.jpg'
import Apivegetarianos from '../../imagenes/recipes/Apivegetarianos.jpg'
import Pescetariano from '../../imagenes/recipes/pescetariano.jpg'
import Pollotariano from '../../imagenes/recipes/Pollotariano.jpg'
import Flexitarianos from '../../imagenes/recipes/Flexitarianos.jpg'
import Veganos from '../../imagenes/recipes/Veganos.jpg'
import Crudiveganos from '../../imagenes/recipes/Crudiveganos.jpg'
import Frugivoristas from '../../imagenes/recipes/Frugivoristas.jpg'
import Paleo from '../../imagenes/recipes/Paleo.jpg'
import  DietaSátvica from '../../imagenes/recipes/DietaSátvica.jpeg'
import  DietaMacrobiótica from '../../imagenes/recipes/DietaMacrobiótica.jpg'

const recipesData = {
    cardRecipes: [
        {
            id: 1,
            nombre: "Vegetarianos",
            img: Vegetarianos,
            desc: "Los vegetarianos tienen como principio no consumir ni carne ni pescado."
        },
        {
            id: 2,
            nombre: "Ovolactovegetariano",
            img: Ovolactovegetariano,
            desc: "En este tipo de dieta no se consume ni pescado ni carne, pero sí huevos y lácteos. Siempre en busca de un origen ecológico y sostenible."
        },
        {
            id: 3,
            nombre: "Apivegetarianos",
            img: Apivegetarianos,
            desc: "Se trata de aquellos vegetarianos que incluyen la miel en su dieta, a pesar de ser un alimento de origen animal. "
        },
        {
            id: 4,
            nombre: "Pescetariano",
            img: Pescetariano,
            desc: "Semi-vegetariano. Consiste en no comer carne de vaca, cerdo o ave de corral, pero sí pescados y mariscos."
        },
        {
            id: 5,
            nombre: "Pollotariano",
            img: Pollotariano,
            desc: "Semi-vegetariano. En esta dieta no se consume carne de vaca, cerdo, pescados y mariscos, peros sí pollo o aves de corral. "
        },
        {
            id: 6,
            nombre: "Flexitarianos",
            img: Flexitarianos,
            desc: "Esta dieta consiste en consumir alimentos vegetarianos o veganos, pero no de manera exclusiva. "
        },
        {
            id: 7,
            nombre: "Veganos",
            img: Veganos ,
            desc: "Consiste en no consumir ningún alimento de origen animal, ya sea carne, pescados, huevos o lácteos, en no utilizar productos de origen animal."
        },
        {
            id: 8,
            nombre: "Crudiveganos",
            img: Crudiveganos,
            desc: "Los crudiveganos defienden el consumo de alimentos crudos para conservar al máximo sus nutrientes."
        },
        {
            id: 9,
            nombre: "Frugivoristas",
            img: Frugivoristas,
            desc: "Es un tipo de veganismo donde solo se alimentan de frutas."
        },
        {
            id: 10,
            nombre: "Paleo",
            img: Paleo,
            desc: "Se trata de comer solo lo que es bueno para nosotros desde el punto de vista de la salud, evitando los alimentos procesados y los azúcares añadidos. "
        },
        {
            id: 11,
            nombre: "Dieta Sátvica",
            img: DietaSátvica,
            desc: "En esta dieta se consumen alimentos naturales, frescos, orgánicos y cocinados de la manera más natural (hervidos, crudos o con cocciones cortas)."
        },
        {
            id: 12,
            nombre: "Dieta Macrobiótica",
            img: DietaMacrobiótica,
            desc: "La alimentación es simple, natural y respetando la naturaleza. Por eso es fundamental consumir productos de temporada, lo menos manipulados posible. "
        },
    ],
};

export default recipesData;