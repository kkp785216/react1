function Sidebar(props) {
    return (
        <div className="col-lg-4 mt-lg-0 mt-4">
            <div className="card"  style={{backgroundColor: props.mode==="light"? "white":"#444444", color: props.mode==="light"? "black":"white"}}>
                <div className="card-header text-center" style={{backgroundColor: props.mode==="light"? "white":"#212529"}}><strong>Sidebar</strong></div>
                <div className="card-body">
                    <p>This is sidebar</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;