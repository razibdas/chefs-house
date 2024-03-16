

const RecipeCard = () => {
    return (
        <div className="flex mx-auto gap-6 justify-center mt-16">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="shadow-2xl px-32 border">
                <h1 className="text-xl pt-2">Want to Cook:</h1>
                <p className="divider w-32"></p>
                <div className="flex gap-28">
                    <h3 className="">Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
                </div>
            </div>
            
        </div>
    );
};

export default RecipeCard;