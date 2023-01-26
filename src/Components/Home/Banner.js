import React from 'react';
import { Row, Col } from "antd";
import "./css/Banner.css";

const Banner = () => {
  const items = [
    {
      title: 'Products',
      desc: 'Here is the chance for you to learn the trade secrets on cake making, cake decoration and other delicious delicacies baking right here in India.',
      img: 'https://d10srchmli830n.cloudfront.net/1664600963368_f7808bc3-e7b0-4f6b-933b-a6988fe87b69_cake-(1).png',
    },
    {
      title: 'Cake Class',
      desc: 'Here is the chance for you to learn the trade secrets on cake making, cake decoration and other delicious delicacies baking right here in India.',
      img: 'https://d10srchmli830n.cloudfront.net/1664601038767_8320d43b-db44-49df-9400-e439f842dbd2_cupcake.png',
    },
    {
      title: 'Recipes',
      desc: 'Here is the chance for you to learn the trade secrets on cake making, cake decoration and other delicious delicacies baking right here in India.',
      img: 'https://d10srchmli830n.cloudfront.net/1664601065217_e3dc8ee8-24cc-43ac-bbd9-c2e833f4099a_birthday-cake.png',
    },
  ];

  return (
    <div className="flexCenterXContainer" style={{ marginBottom: '60px', paddingTop: '80px' }}>
      <div className="card">
        <Row gutter={[16, 16]} justify="center">
          {items.map((item) => (
            <Col xl={8} lg={8} md={12} sm={24} xs={24} key={item.title}>
              <div className="flex">
                <img
                  src={item.img}
                  alt=""
                  style={{ width: '100px', height: '100px', marginRight: '10px' }}
                  className="mr-8"
                />
                <div className="flexColContainer">
                  <div className="title">{item.title}</div>
                  <div className="description">{item.desc}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Banner;
