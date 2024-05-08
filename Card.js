import React from 'react';
import { Card, Space } from 'antd';
export const Card1 = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <img src='cake.jpg' />
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <img src='cake.jpg' />
    </Card>
  </Space>
);