import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let recipe = {
            name: 'Pizza',
            ingredients: ['Tomato', 'Cheese', 'Jam', 'salami'],
            calories: 400
        };

        return(
            <div className="my-component">
                <hr/>
                <h1>Recipe: {recipe.name}</h1>
                <h1>Calories: {recipe.calories}</h1>
                <ol>
                    {
                        recipe.ingredients.map((ing, i) => {
                            return(
                                <li key={i}>
                                    {ing}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>

                {this.props.saludo &&
                <React.Fragment>
                    <h1>DESDE UNA PROP: </h1>
                    <h3>{this.props.saludo}</h3>
                </React.Fragment>
                }
                
            </div>
        )
    }
}

export default MiComponente;