import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './dropdown.css';
import './bookorder.css';


export default class Bookorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      seg: [],
      model: [],
      manufacturer: [],
      min2: '', modelId: [],
      selectedSegment: '--Choose Segmnet--',
      selectedManufacturer: '--Choose Manufacturer--',
      selectedModel: '--Choose Model--',
      id: '',
      sModel: {
        segid: '',
        manid: '',
        mid: '',
        modelId: '',
        minQty: ''
      }
    };
    this.handleSegChange = this.handleSegChange.bind(this);
    this.handleManuChange = this.handleManuChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/seg/segments")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            seg: result
          });
        }
      );

  }
  handleSegChange(event) {
    this.setState({ selectedSegment: event.target.value });
    this.state.sModel.segid = event.target.selectedIndex;
    console.log(this.state.sModel.segid)
    //  FETCH MANUFACTURER BASED ON SELECTED SEGMENT
    fetch("http://localhost:8080/menu/" + this.state.sModel.segid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            manufacturer: result
          });
        }

      );
    fetch("http://localhost:8080/seg/minQ/" + this.state.sModel.segid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            min2: result
          });
        }
      );
  }
  handleManuChange(event) {
    this.setState({ selectedManufacturer: event.target.value });
    this.state.sModel.manid = event.target.selectedIndex;
    console.log(this.state.sModel.manid)
    //http://localhost:8080/S4KVR_Hibernate/model/
    var u = "http://localhost:8080/model/"
    fetch(u + this.state.sModel.segid + "/" + this.state.sModel.manid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            model: result

          });
        }

      );


  }
  handleModelChange(event) {
    this.setState({ selectedModel: event.target.value });
    this.state.sModel.mid = event.target.selectedIndex;
    console.log(this.state.sModel.mid)
    ///S4KVR_Hibernate
    fetch("http://localhost:8080/model/id/" + this.state.sModel.segid + "/" + this.state.sModel.mid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            modelId: result

          });
        }

      );

  }
  handleQtyChange(event) {
    this.setState({ selectedQty: event.target.value });
    // console.log(this.state.selectedQty)
    this.state.sModel.minQty = event.target.value;
    console.log(this.state.sModel.minQty)
    console.log(this.state.sModel)
    this.state.URL1 = "http://localhost:8080/model/" + this.state.sModel.segid + "/" + this.state.sModel.manid//+"/"+this.state.sModel.manid
    console.log(this.state.URL1)

    console.log("Getting model id" + this.state.modelId.id);
    this.state.sModel.modelId = this.state.modelId.id;
    this.state.id = this.state.sModel.modelId;
    console.log("from url1.id: " + this.state.URL1.id)

  }
  handleSubmit(event) {
    console.log(typeof (this.state.id))
    // this.props.history.push("/defaultconfig",this.state.id)
    // this.props.history.push({
    //   pathname: '/defaultconfig/',
    //   id: this.state.sModel.modelId,
    // });
    // console.log(this.props.location.id)
    // this.props.history.push(`/defaultconfig/:${this.state.modelId.id}`)

    // this.props.history.push({
    //   pathname: '/defaultconfig',
    //   state:this.state
    // });
    event.preventDefault();


  }

  render() {
    return (
      <div>

        <div class="container  mx-auto">
          <div className="bookorders ">
            <div className="row ">

              <div className="col-xs-7 col-sm-1 col-md-5 col-lg-6 justify-content-center">
                <img className="bookimg" src='https://imgd.aeplcdn.com/1056x594/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=85' />

              </div>

              <div className="col-xs-5 col-sm-11 col-md-12 col-lg-6 justify-content-center">

                <br></br><br></br><br></br>
                <div className="bookorderform mx-auto justify-content-center" >
                  <br></br><br></br>
                  <h2 className="login ">BOOK ORDER</h2>
                  <br></br><br></br>
                  <label>
                    <h5>SEGMENT OF CAR</h5>
                    <select placeholder="segment" value={this.state.selectedSegment} onChange={this.handleSegChange} class="custom-select sources" >
                      <option>--Choose Segment--</option>
                      {this.state.seg.map((e) => {
                        return <option key={e.id}>{e.segType}</option>;
                      })}
                    </select></label>
                  <br></br><br></br>

                  <label>
                    <h5>MANUFACTURER</h5>
                    <select placeholder="manufacturer" value={this.state.selectedManufacturer} onChange={this.handleManuChange} class="custom-select sources" >
                      <option>--Choose Manufacturer--</option>
                      {this.state.manufacturer.map((e1) => {
                        return <option key={e1.id}>{e1.manuName}</option>;
                      })}
                    </select></label>

                  <br></br><br></br>

                  <label>
                    <h5>MODEL</h5>
                    <select required={true} placeholder="model" value={this.state.selectedModel} onChange={this.handleModelChange} class="custom-select sources" >
                      <option>--Choose Model--</option>
                      {this.state.model.map((e1) => {
                        return <option key={e1.id}>{e1.modelName}</option>;
                      })}
                    </select>  </label>
                  <br></br>

                  <label>
                    <h5>QUANTITY</h5>
                    <input name="minQty" type="number" min={this.state.min2} onChange={this.handleQtyChange} class="custom-select" />
                  </label>
                  <br></br>
                  <table><tr><td>
                    <button type="button" onClick={() => this.props.history.push('/defaultconfig/' + this.state.modelId.id)} class="btn btn-danger ">  PROCEED  </button>

                  </td>&nbsp;&nbsp;
<td><button type="button" class="btn btn-danger ">CANCLE</button>
                    </td></tr></table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//