import React from 'react';
import './defaultcon.css'


class Defaultconfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      model: {},
      modelDet: [],
      itemsStd: [],
      itemsInt: [],
      itemsExt: [],
      itemsCon: [],
      itemsCore: [],
      image: ''

    };
  }
  async componentWillMount() {
    //GET MODEL DETAIL FROM MODELS 
    fetch("http://localhost:8080/model/getModelByid/"+this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            model: result
          });
        }
      );
    console.log(this.state.model)

    //get core default parts
    fetch("http://localhost:8080/items/getcoreitems/"+this.props.match.params.id)//+this.props.match.params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsCore: result
          });
        }
      );
    console.log(this.state.itemsCore)

    //get interior default parts
    fetch("http://localhost:8080/items/getintitems/"+this.props.match.params.id+"/default")//+this.props.match.params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsInt: result
          });
        }
      );
    console.log(this.state.itemsInt)
    //get exterior default parts
    fetch("http://localhost:8080/items/getextitems/"+this.props.match.params.id+"/default")//+this.props.match.params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsExt: result
          });
        }
      );
    console.log(this.state.itemsCore)

    //get STANDARD default parts
    fetch("http://localhost:8080/items/getstditems/"+this.props.match.params.id+"/default")//+this.props.match.params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsStd: result
          });
        }
      );
    console.log(this.state.itemsCore)

    //get all configure parts
    fetch("http://localhost:8080/items/getitems/"+this.props.match.params.id+"/configure")//+this.props.match.params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsCon: result
          });
        }
      );
    console.log(this.state.itemsCon)
  }


  render() {
    return (
      <div className="container defaultpage ">

        <br />   <br />   <br />
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 mt-5 ">

            <img className="selectedcar img-hover-zoom" src={"../images/" + this.state.model.model_img} />

            <div className="card  cardefault p-3 text-align-center img-hover-zoom" >

              <div className="card-body">

                <h5 className="card-title text-primary">EXTERIOR FEATURES</h5>

                <p className="card-text" >
                  {this.state.itemsExt.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}



                </p>

              </div>
            </div>
            <div className="card  cardefault p-3 text-align-center img-hover-zoom" >

              <div className="card-body">

                <h5 className="card-title text-primary">STANDARD FEATURES</h5>

                <p className="card-text">
                  {this.state.itemsStd.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}

                </p>

              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 mt-5 " >
            <div className="card   cardefault p-3 img-hover-zoom" >
              <div className="card-body">
                <h5 className="card-title text-primary">BASIC DETAILS</h5>

                <p className="card-text">
                  <li>Model Name: {this.state.model.modelName}</li>
                  <li>Basic Price: {this.state.model.price}</li>
                  <li>Model Description: {this.state.model.modelDescip}</li>
                  <li>Manufactur Date: {this.state.model.mfgDate}</li>
                  <li>{this.state.model.modelName}</li></p> <br />
                <h5 className="card-title text-primary">CORE DETAILS</h5>
                <p className="card-text">
                  {this.state.itemsCore.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}</p>

              </div>
            </div>


            <div className="card  cardefault p-3 img-hover-zoom" >
              <div className="card-body">
                <h5 className="card-title text-primary">INTERIOR FEATURES</h5>

                <p className="card-text">
                  {this.state.itemsInt.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}
                </p>

              </div>
            </div>
            <div className="card  cardefault p-3 text-align-center img-hover-zoom" >

              <div className="card-body ">

                <h5 className="card-title text-primary">CONFIGURABLE FEATURES</h5>

                <p className="card-text">

                  {this.state.itemsCon.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}


                </p>

              </div>
            </div>
          </div>
        </div>
        <br /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <button type="button" className="btn btn-danger defualtbtn " onClick={() => this.props.history.push('/invoice/' + this.state.model.id)}>CONFIRM ORDER</button>
        <button type="button" className="btn btn-danger defualtbtn" onClick={() => this.props.history.push('/configpage/' + this.state.model.id)}>CONFIGURE</button>
        <button type="button" className="btn btn-danger defualtbtn" onClick={() => this.props.history.push('/bookorder')}>MODIFY</button>

      </div>
    )
  }
}

export default Defaultconfig;
