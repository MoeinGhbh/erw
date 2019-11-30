import React, { Component } from "react";
import "./css/ZoneCard.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ZoneCard extends Component {
  render() {
    let { content } = this.props;
    let { items } = this.props;

    var i,j;
    var rwLMP = [];
    var rwCTN = [];
    var rwACD = [];
    var rwSKT = [];
    for (j in  items)
      for (i in items[j].Lamp)
          {
            rwLMP.push(<Button> لامپ {i} </Button> );
            rwLMP.push(<Button> حذف </Button> );
          }

    for (j in  items)  
      for (i in items[j].Curtains)
      {
        rwCTN.push(<Button> پرده {i} </Button> );
        rwCTN.push(<Button> حذف </Button> );
      }  
      
      for (j in  items)  
      for (i in items[j].AirCondition)
      {
        rwACD.push(<Button> گرمایش / سرمایش {i} </Button> );
        rwACD.push(<Button> حذف </Button> );
      } 

      for (j in  items)  
      for (i in items[j].Socket)
      {
        rwSKT.push(<Button> پریز {i} </Button> );
        rwSKT.push(<Button> حذف </Button> );
      } 


    
    return (
      <div className="Card">
        <h3>{content}</h3>
        {/* <img src={} height="42" width="42" /> */}
        <Container>
          <Row>
            <Col>{rwLMP}</Col>
            <Col>{rwCTN}</Col>
            <Col>{rwACD}</Col>
            <Col>{rwSKT}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ZoneCard;
