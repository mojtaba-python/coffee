import img1 from '../../asserts/p3.png';
import img2 from '../../asserts/p4.png';
import img3 from '../../asserts/p2.png';
import img4 from '../../asserts/p3.png';

let coffeeInfo = [
    {
        id: 1,
        image: img1,
        des: "قهوه ترک 250 گرمی",
        price: "220,000"
    },
    {
        id: 2,
        image: img2,
        des: "قهوه اسپرسو 250 گرمی",
        price: "180,000"
    }, {
        id: 3,
        image: img3,
        des: "قهوه آمریکانو 250 گرمی",
        price: "250,000"
    },
    {
        id: 4,
        image: img4,
        des: "قهوه فلت وایت 250 گرمی",
        price: "140,000"
    },
    {
        id: 5,
        image: img1,
        des: "قهوه ترک 250 گرمی",
        price: "200,000"
    },
    {
        id: 6,
        image: img2,
        des: "قهوه ترک 250 گرمی",
        price: "200,000"
    }
];
export const getInfo =()=>{
    return coffeeInfo;
}