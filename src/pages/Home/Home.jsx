import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import OurRecipe from "../OurRecipe/OurRecipe";
import RecipeCard from "../RecipeCard/RecipeCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurRecipe></OurRecipe>
            <RecipeCard></RecipeCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;