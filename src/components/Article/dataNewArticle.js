import img1 from './picNewArticle/a-1 (1).jpg';
import img2 from './picNewArticle/a-2.jpg';
import img3 from './picNewArticle/n-3.jpg';
import img4 from './picNewArticle/n-4.webp';

const newArticle = [
    {
        title:"طرز تهیه آیس کاپوچینو",
        image:img1,
        date:"1402/03/10",
        id:1
    },
    {
        title:"دانه قهوه اسپرسو جیورنو",
        image:img2,
        date:"1403/05/11",
        id:2
    },
    {
        title:"سفر به مزارع قهوه",
        image: img3,
        date:"1403/06/08",
        id:3
    },
    {
        title:"کشف دنیای قهوه",
        image: img4,
        date:"1403/06/15",
        id:4
    },
]

export const infoArticleNew = ()=>{
    return newArticle;
};