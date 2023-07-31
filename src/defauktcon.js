import React, { Component } from 'react';
import './defaultcon.css'
import PDF from './PDF';
class Defaultconfig extends React.Component {
    constructor(props) {
        super(props);
        // ModelName:'';
        // ExtData:'';
        // IntData:'';
        // StdData:'';
        this.state = { model: [] };
        this.handleStdChange = this.handleStdChange.bind(this);
        this.handleExtChange = this.handleExtChange.bind(this);
        this.handleIntChange = this.handleIntChange.bind(this);
        this.invoiceHandler = this.invoiceHandler.bind(this);
    }
    async componentDidMount() {
        console.log(this.props.match.params.id)
        const response = fetch("http://localhost:8080/S4KVR_Hibernate/menu/" + this.props.match.params.id);
        const res = response.json();
        this.setState({ model: res });
        console.log(this.state.model)
    }

    invoiceHandler = (e) => {

        if (!this.state.title || !this.state.content) {
            alert('All fields are required!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
        }
        this.props.history.push('/invoice/' + this.state.ModelId)

    }


    render() {
        return (
            <div className="container defaultpage ">
                <br />   <br />   <br />
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-5 ">
                        <img className="selectedcar img-hover-zoom" src="https://c4.wallpaperflare.com/wallpaper/840/954/346/dark-night-rain-car-wallpaper-preview.jpg" />

                        <div className="card  cardefault p-3 text-align-center img-hover-zoom" >

                            <div className="card-body">

                                <h5 className="card-title text-primary">STANDARD FEATURES</h5>
                                <p>
                                    <label>model name : {this.state.model.id} </label>
                                </p>
                                <p>
                                    <label>modelName : {this.state.model.modelName}</label>
                                </p>
                                <p>
                                    <label>modelDescip : {this.state.model.modelDescip}</label>
                                </p>
                                <p>
                                    <label>mfgDate :{this.state.model.mfgDate} </label>
                                </p>
                                <p>
                                    <label>price: {this.state.model.price}</label>
                                </p>
                                {/*                 

         

                        <p className="card-text" >• 3-Point Seat Belts at all Seating Positions   <br/>
                            • Front 3-Point Seat Belts with Automatic Tensioning System   <br/>
                            • Dual-Stage, Dual Threshold Front Airbags (SRS)   <br/>
                            • Advanced Compatibility Engineering™ (ACE™) body structure   <br/>
                            `	• Four-wheel Disc Brakes   <br/>
                            • Anti-Lock Braking System (ABS)   <br/>   <br/>
                            • Lower Anchors and Tethers for Children (LATCH)
                            • Child-Seat Tether Anchor (Rear-Center)
                            • Emergency Trunk Opener

                            {this.state.model.map((e) => {
                            return <option key={e.id}>{e}</option>;
						})}


        </p>

                    </div>
                </div>

            </div>

                <div className = "col-sm-12 col-md-12 col-lg-6 mt-5 " >
                    <div className="card   cardefault p-3 img-hover-zoom" >
                        <div className="card-body">
                            <h5 className="card-title text-primary">INTERIOR FEATURES</h5>

                            <p className="card-text">• White body colour
                                • 5-Speed Manual Transmission
                                • Double Wishbone Front Suspension
                                • Independent Multi-Link Rear Suspension
                                • Front and Rear Stabilizer Bars
                                • Variable Gear Ratio (VGR) Power-Assisted Rack-and-Pinion Steering
                                • Black colour bumper
                                .</p><br/>
            </div>
                    </div>


                    <div className="card  cardefault p-3 img-hover-zoom" >
                        <div className="card-body">
                            <h5 className="card-title text-primary">EXTERIOR FEATURES</h5>

                            <p className="card-text" >Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
*/}
                            </div>
                        </div>
                    </div>

                </div><br />
                <button type="button" className="btn btn-danger defualtbtn " onClick={this.invoiceHandler}>CONFIRM ORDER   <PDF title={this.state.ModelName} content={this.state.StdData, this.state.IntData, this.state.ExtData} image={this.state.ModelId} /></button>
                <button type="button" className="btn btn-danger defualtbtn" onClick={() => this.props.history.push('/configpage/' + this.state.ModelId)}>CONFIGURE</button>
                <button type="button" className="btn btn-danger defualtbtn" onClick={() => this.props.history.push('/bookorder')}>MODIFY</button>

            </div>
        )
    }
}

export default Defaultconfig;
