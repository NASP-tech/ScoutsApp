import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='light'>
            <MDBContainer className='p-4'>
            </MDBContainer>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-white' href='#'>
                    Scouts de El Salvador
                </a>
            </div>
        </MDBFooter>
    );
}