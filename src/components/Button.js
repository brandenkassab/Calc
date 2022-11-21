import "./Button.css";

const Button = ({ Character, backc, click }) => {
    return  <div
    onClick= {() => click(Character) }
     className="buttoncss" style={{backgroundColor: backc}}>{Character}</div>;
    
};

export default Button