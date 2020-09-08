import React, {useState} from 'react';
import {Button, Collapse, ResponsiveEmbed } from 'react-bootstrap';

const Alert = () => {
    const [open, setOpen] = useState(false);
    return (
        <>

<div style={{ width: 260, height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
    <embed type="image/svg+xml" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Castle1.svg" />
  </ResponsiveEmbed>
</div>




      <Button className='col-md-4'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className='col-md-4'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>

    );
};

export default Alert;