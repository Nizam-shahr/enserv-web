import React from 'react';
import { Timeline } from 'antd';
const RecentTimeline = () => (
  <Timeline
    items={[
      {
        children: 
        <>
        <h1>$2400 Purchase</h1>
        <p>
        11 JUL 8:10 PM
          </p>
          </>
      },
      {
        children: 
        <>
        <h1>New order #8744152</h1>
        <p>
        11 JUL 11 PM
          </p>
          </>
      },
      {
        children: 
        <>
        <h1>Affilate Payout</h1>
        <p>
        11 JUL 7:64 PM
          </p>
          </>
      },
      {
        children: 
        <>
        <h1>New user added</h1>
        <p>
        11 JUL 1:21 AM
          </p>
          </>
      },
      {
        children: 
        <>
        <h1>Product added</h1>
        <p>
        11 JUL 4:50 AM
          </p>
          </>
      },
    ]}
  />
);
export default RecentTimeline;