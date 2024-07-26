import "./Button.scss"
function Button (props){
    return(
        <button onClick={props.detailFn}>{props.name}</button>
    )
}

export default Button