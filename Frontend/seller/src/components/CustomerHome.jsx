import '../styles/customerHome.css';
export default function CustomerHome() {
    return (
        <>
        <div className="container">
          <div className="card mt-3 " style={{"width": "18rem", "height":"18rem"}}>
                    <img src="https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato</h5>
                        <p className="card-text">By person</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                </div>
        </>
    )
}