function Sidebar(props) {
    // return <h1>{props.greet} from Sidebar</h1>
    
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
    
    return (
        <aside style={asideStyle} 
        className="sidebar-componet">
            <h2>Sidebar content here</h2>
        </aside>
    )
}

export default Sidebar;
