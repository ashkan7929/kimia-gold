import { Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { IoClose } from '../../Icons';
import Button from '../Button/Button';
import { useTheme } from '../../contexts/ThemeContext';

interface IModal {
    open: boolean;
    handleClose: () => void;
    handleSubmit?: () => void;
    children: React.ReactElement;
    modalTitle: string;
    confirmText: string;
}

export default function Modal({
    open,
    handleClose,
    handleSubmit,
    children,
    modalTitle,
    confirmText,
}: IModal) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <>
            {/* <ThemeProvider theme={createTheme({ colorSchemes: { dark: true } })} defaultMode={"dark"}> */}
            <Dialog
                fullWidth={false}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                // className='bg-primary-dark'
                sx={theme => ({
                    '& .MuiPaper-root': {
                        padding: 0,
                        width: 600,
                        borderRadius: 4,
                        bgcolor: isDark ? '#212121' : '#ffffff',
                        [theme.breakpoints.down('sm')]: {
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderRadius: '16px 16px 0 0',
                            margin: 0,
                            color: 'white',
                        },
                    },
                })}
            >
                <Stack direction={'row'} alignItems={'center'}>
                    <DialogTitle
                        sx={{
                            m: 0,
                            px: 4,
                            py: 3,
                            color: isDark ? '#fff' : '#000',
                            fontSize: 14,
                        }}
                        className="!font-alibaba"
                        fontWeight={'bold'}
                        id="customized-dialog-title"
                    >
                        {modalTitle}
                    </DialogTitle>
                </Stack>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={theme => ({
                        position: 'absolute',
                        left: 15,
                        top: 20,
                        color: theme.palette.mode === 'dark' ? 'white' : '#808080',
                        border: '1px solid #384673',
                    })}
                >
                    <IoClose fontSize={15} />
                </IconButton>
                <DialogContent>{children}</DialogContent>
                {confirmText && (
                    <DialogActions sx={{ px: 3, pb: 3 }}>
                        <Button
                            className="px-4 w-full text-xs text-white dark:bg-accent-orange bg-primary-blue"
                            onClick={handleSubmit}
                        >
                            {confirmText}
                        </Button>
                    </DialogActions>
                )}
                
            </Dialog>
            {/* </ThemeProvider> */}
        </>
    );
}
