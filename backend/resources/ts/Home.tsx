import { Button } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入できたわな</div>
                        <div className="card-body">
                            Im an example component!
                        </div>
                        <Button color="primary" variant="contained">
                            Hello World
                        </Button>

                        <Link to="/second">second</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
