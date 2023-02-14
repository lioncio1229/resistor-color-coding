
export default function bandReducer(state, action)
{
    const newState = state.map(obj =>
        (obj.bandName === action.bandName ? {...obj, color : action.color} : obj)
    );
    return newState;
}