import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
            <div>
                <footer className="rounded-top" style={{margin: 'auto', width: '85%', position: 'fixed', bottom: 0, left:0, right:0, backgroundColor: '#fed9b7', textAlign: 'center', padding: '6px'}}>
                    {`Copyright © FINKI Code ${year}`}
                </footer>
            </div>
        )
  };
  
  export default Footer;