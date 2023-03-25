import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Snackbar, Button } from '@material-ui/core';

const CookiesAccept = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookies-accepted']);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!cookies['cookies-accepted']) {
            setOpen(true);
        }
    }, [cookies]);

    const handleClose = () => {
        setCookie('cookies-accepted', true, { path: '/' });
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={6000}
            message="This website uses cookies to enhance the user experience."
            action={
                <Button color="secondary" size="small" onClick={handleClose}>
                    OK
                </Button>
            }
        />
    );
}

export default CookiesAccept;
