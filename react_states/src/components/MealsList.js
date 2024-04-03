import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const { meals } = useMealsListContext();

    return (
        <div className="meals-list">
            <h1>Meals List Using Context API (APLICATION PROGRAMMING INTERFACE)</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
                // <Meal key={meal.id} meal={meal} />
            ))}
        </div>
    );
}

export default MealsList;
