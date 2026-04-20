import React from 'react';

const RecipeList2x2 = () => {
    // Mock data cho recipes
    const recipes = [
        { id: 1, title: "Pizza Margherita", image: "https://via.placeholder.com/300", time: "30 mins" },
        { id: 2, title: "Spaghetti Carbonara", image: "https://via.placeholder.com/300", time: "25 mins" },
        { id: 3, title: "Caesar Salad", image: "https://via.placeholder.com/300", time: "15 mins" },
        { id: 4, title: "Grilled Chicken", image: "https://via.placeholder.com/300", time: "40 mins" }
    ];

    return (
        <div className="recipe-list-2x2">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                padding: '20px'
            }}>
                {recipes.map(recipe => (
                    <div key={recipe.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '15px' }}>
                            <h3>{recipe.title}</h3>
                            <p>⏱️ {recipe.time}</p>
                            <button style={{
                                backgroundColor: '#ff6b35',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList2x2;