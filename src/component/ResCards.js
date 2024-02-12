export default function ResCards(props) {
    const{image}=props
    const { restaurant_name } = props.data
    return (
        <div className="dis" style={{ height: 300, width: 300, color: "black" }}
         onClick={props.onClick}>
            <img style={{ width: 200 }} src={image} ></img>
            <h3>{restaurant_name}</h3>
           
        </div>
    )
}
