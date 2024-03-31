"use client"

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';

const CreateGroupDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<'bottom' | 'right'>('right');

  // Determine the drawer placement based on the screen width
  useEffect(() => {
    const updatePlacement = () => {
      if (window.innerWidth < 768) { // Assuming 768px is the breakpoint for mobile devices
        setPlacement('bottom');
      } else {
        setPlacement('right');
      }
    };

    updatePlacement(); // Update placement on component mount
    window.addEventListener('resize', updatePlacement); // Update placement on window resize

    // Cleanup event listener
    return () => window.removeEventListener('resize', updatePlacement);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Button size='large'
        type="primary"
        onClick={showDrawer} 
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
        }}
      >
        Create New Group
      </Button>
      
      <Drawer
        title="Create New Group"
        placement={placement}
        width={500} height={"100%"}
        onClose={onClose}
        open={open}
        extra={
          <Button type="primary" onClick={onClose}>
            Close
          </Button>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default CreateGroupDrawer;
