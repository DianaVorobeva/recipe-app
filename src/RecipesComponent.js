function RecipesComponent({label,image,calories,ingredients,fats,carbs,protein}) {

    return (
        <div className="list">
            <h2>{label}</h2>
            <div className="image">
                <img src={image} alt="recipe"/>
            </div>
            <p>{calories.toFixed()} calories</p>
            <ul>
                {ingredients.map((ingredient,index) => (
                   
                    <li key={index}><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-check-banking-and-finance-kiranshastry-gradient-kiranshastry.png" alt="check" className="icon"/>{ingredient}</li>
                ))}
            </ul>
            <div className="position"> 
                <div className="block">
                    <h3>Total Fats</h3>
                    <p><b>{fats.toFixed()}</b> g</p>
                </div>
                <div className="block">
                    <h3>Total Carbs</h3>
                    <p><b>{carbs.toFixed()}</b> g</p>
                </div>
                <div className="block">
                    <h3>Total Protein</h3>
                    <p><b>{protein.toFixed()}</b> g</p>
                </div>
            </div>
        </div>
    )
}

export default RecipesComponent;