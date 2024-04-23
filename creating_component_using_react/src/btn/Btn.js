// function Btn() {
//     const clickHandler = () => console.log('Clicked me');

//     return (
//         <div>
//             <button onClick={clickHandler}>
//                 Click Me
//             </button>
//         </div>
//     );
// }

// export default Btn;


function BtnOnMouseOver() {
    const clickHandler = () => console.log('mouse over me');
    return (
        <button onMouseOver={clickHandler}>
            Click Me
        </button>
    );
}

export default BtnOnMouseOver;
