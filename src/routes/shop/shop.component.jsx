// import SHOP_DATA from '../../shop-data.json'
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { Routes, Route} from "react-router-dom";
import "./shopstyles.scss"

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray))
        }
        getCategoriesMap();
    },[])
    
    return(
       <Routes>  
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
       </Routes>
    )
}

export default Shop