export default (state = {
    clicked: false
}, action) => {
    console.log(action)
    switch (action.type) {
        case "click":
            return {
                clicked: action.payload
            };
        default:
            return state;
    }
};