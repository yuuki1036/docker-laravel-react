import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">pages下に移動出来た？？</div>
                        <Button color="secondary" variant="contained">
                            ワイがMaterial-UIのボタンやな？？
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
